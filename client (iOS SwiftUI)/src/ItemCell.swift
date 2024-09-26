//
//  ItemCell.swift
//  Byte-Me-Bistro
//
//  Created by Pichborith Kong on 9/26/24.
//

import SwiftUI

#Preview {
    ItemCell(item: MockData.sampleItem)
}

struct ItemCell: View {
    let item: Item
    let imageUrl = "https://seanallen-course-backend.herokuapp.com/images/appetizers/asian-flank-steak.jpg"

    var body: some View {
        HStack {
            AsyncImage(url: URL(string: imageUrl)) { image in
                image.resizable()
                    .scaledToFill()
                    .frame(width: 120, height: 80)
                    .cornerRadius(10)
            } placeholder: {
                ProgressView()
                    .tint(.accentColor)
            }

            VStack(alignment: .leading) {
                Text(item.name)
                    .font(.title2)
                    .fontWeight(.semibold)
                Text("$ " + String(format: "%.2f", item.price))
                    .foregroundColor(.secondary)
                    .fontWeight(.semibold)
            }
            .padding(.leading)
        }
    }
}
