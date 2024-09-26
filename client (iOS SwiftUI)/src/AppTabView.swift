//
//  ContentView.swift
//  Byte-Me-Bistro
//
//  Created by Pichborith Kong on 9/25/24.
//

import SwiftUI

#Preview {
    AppTabView()
}

struct AppTabView: View {
    var body: some View {
        TabView {
            MenuView().tabItem { Label("Menu", systemImage: "fork.knife") }

            BookingView().tabItem { Label("Booking", systemImage: "book") }

        }
    }
}
