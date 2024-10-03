//
//  ItemView.swift
//  Byte-Me-Bistro
//
//  Created by Pichborith Kong on 10/1/24.
//

import SwiftUI

#Preview {
    ItemView(item: MockData.sampleItem, isPresented: .constant(true))
}

struct ItemView: View {
    var item: Item
    @Binding var isPresented: Bool
    @State var quantity = 1

    var body: some View {
        VStack(alignment: .leading) {
            DismissButton(isPresented: $isPresented)
            
            AsyncImage(url: URL(string: item.imageUrl)) { image in
                image
                    .resizable()
                    .scaledToFit()
            } placeholder: {
                ProgressView() // Shows a loading spinner while the image is loading
                    .tint(.accentColor)
            }

            Text(item.name)
                .font(.title)
                .fontWeight(.semibold)

            Text(item.category)
                .italic()
                .font(.title2)

            Text("$ \(item.price, specifier: "%.2f")")
                .foregroundColor(.secondary)
                .fontWeight(.semibold)

            Spacer()
            
            HStack(spacing: 16) {
                ItemQuantityButton(quantity: $quantity)
                    .frame(maxWidth: .infinity)

                Button {
                    print("tapped")
                } label: {
                    Text("Add to Cart")
                        .bold()
                        .font(.title3)
                        .foregroundStyle(.white)
                }
                .frame(maxWidth: .infinity, maxHeight: 54)
                .background(Color.accentColor)
                .cornerRadius(8) // Round the corners of the background
    
                
            }
        }
        .padding()
    }
}
