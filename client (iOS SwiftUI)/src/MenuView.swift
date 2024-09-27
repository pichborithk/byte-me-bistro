//
//  MenuView.swift
//  Byte-Me-Bistro
//
//  Created by Pichborith Kong on 9/26/24.
//

import SwiftUI

#Preview {
    MenuView()
}

struct MenuView: View {
    
    @StateObject private var viewModel = MenuViewModel()
    
    var body: some View {
        NavigationView {
            List(viewModel.menu) { Item in
                ItemCell(item: Item)
//                    .alignmentGuide(.listRowSeparatorLeading) { _ in -20 }
            }
            .listStyle(.plain)
            .navigationTitle("Menu")
        }
        .task {
            await viewModel.fetchMenu()
        }
    }
}


