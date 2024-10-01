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
            List(viewModel.menu) { item in
                ItemCell(item: item)
//                    .alignmentGuide(.listRowSeparatorLeading) { _ in -20 }
                    .onTapGesture {
                        viewModel.isSelectedItem = true
                        viewModel.selectedItem = item
                    }
            }
            .listStyle(.plain)
            .navigationTitle("Menu")
        }
        .task {
            await viewModel.fetchMenu()
        }
        .sheet(isPresented: $viewModel.isSelectedItem) {
            ItemView(item: viewModel.selectedItem!, isPresented: $viewModel.isSelectedItem)
        }
    }
}


