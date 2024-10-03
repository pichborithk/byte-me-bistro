//
//  BookingView.swift
//  Byte-Me-Bistro
//
//  Created by Pichborith Kong on 9/26/24.
//

import Combine
import SwiftUI

#Preview {
    BookingView()
}

struct BookingView: View {
    @StateObject private var viewModel = BookingViewModel()
    @State var phoneNumber = ""
    
    var body: some View {
        NavigationView {
            VStack {
                Form {
                    Section {
                        TextField("Name", text: $viewModel.reservation.name)

                        TextField("Phone Number", text: $phoneNumber)
                            .keyboardType(.phonePad) // Use the phone pad keyboard for convenience
                            .textContentType(.telephoneNumber) // Provide context for autofill
                            .onReceive(Just(phoneNumber)) { newValue in
                                phoneNumber = viewModel.formatPhoneNumber(newValue: newValue)
                            }
                        // onChange use with iOS 17+
//                        .onChange(of: phoneNumber) {
//                            if !phoneNumber.isEmpty {
//                                phoneNumber = phoneNumber.formatPhoneNumber()
//                            }
//                        }

                        Picker("Party Size", selection: $viewModel.reservation.partySize) {
                            ForEach(1 ... 12, id: \.self) { size in
                                Text("\(size)").tag(size)
                            }
                        }

                        DatePicker("Select a Date",
                                   selection: $viewModel.reservation.date,
                                   in: Date() ... Date().sevenDayLater,
                                   displayedComponents: .date)

                        DatePicker("Select a Time", selection: $viewModel.reservation.time,
                                   displayedComponents: .hourAndMinute)
                    }

                    Section {
                        HStack {
                            Spacer()

                            Button {
                                Task {
                                    viewModel.reservation.phoneNumber = phoneNumber
                                    await viewModel.createReservation()
                                }

                            } label: {
                                Text("Book Now")
                                    .bold()
                                    .font(.title3)
                                    .foregroundStyle(.white)
                            }
                            .frame(width: 160, height: 50)
                            .background(Color.accentColor)
                            .cornerRadius(8)

                            Spacer()
                        }
                    }
                    .listRowBackground(Color.clear)
                }
            }

            .navigationTitle("Book a Table")
        }
    }
}
