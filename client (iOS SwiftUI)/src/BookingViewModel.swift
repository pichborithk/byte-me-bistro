//
//  BookingViewModel.swift
//  Byte-Me-Bistro
//
//  Created by Pichborith Kong on 10/2/24.
//

import SwiftUI

@MainActor class BookingViewModel: ObservableObject {
    @Published var reservation = Reservation()
    
    func createReservation() async {
        let request = Reservation.toRequest(reservation)
        
        do {
            try await NetworkManager.shared.createReservation(from: request)
        } catch {
            print(error.localizedDescription)
        }
    }
    
    func formatPhoneNumber(newValue: String) -> String {
        let cleanNumber = newValue.components(separatedBy: CharacterSet.decimalDigits.inverted).joined()

        let mask = "(XXX) XXX-XXXX"

        var result = ""
        var startIndex = cleanNumber.startIndex
        let endIndex = cleanNumber.endIndex

        for char in mask where startIndex < endIndex {
            if char == "X" {
                result.append(cleanNumber[startIndex])
                startIndex = cleanNumber.index(after: startIndex)
            } else {
                result.append(char)
            }
        }
        
        return result
    }
}
