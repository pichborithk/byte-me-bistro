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
    var body: some View {
        NavigationView {
            List(MockData.items) { Item in
                ItemCell(item: Item)
//                    .alignmentGuide(.listRowSeparatorLeading) { _ in -20 }
            }
            .listStyle(.plain)
            .navigationTitle("Menu")
        }
    }
}


