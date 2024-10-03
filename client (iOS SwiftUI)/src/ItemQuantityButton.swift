//
//  ItemQuantityButton.swift
//  Byte-Me-Bistro
//
//  Created by Pichborith Kong on 10/1/24.
//

import SwiftUI

#Preview {
    ItemQuantityButton(quantity: .constant(1))
}

struct ItemQuantityButton: View {
    @Binding var quantity: Int

    var body: some View {
        HStack(spacing: 24) {
            Button {
                decrement()
            } label: {
                Text("-")
                    .font(.title)
                    .padding()
            }
            .disabled(quantity <= 1)

            Text("\(quantity)")
                .bold()
                .font(.title3)
                .foregroundStyle(Color.accentColor)

            Button {
                increment()
            } label: {
                Text("+")
                    .font(.title)
                    .padding()
            }
            .disabled(quantity >= 9)
        }
        .frame(maxWidth: .infinity, maxHeight: 54)
        .cornerRadius(8) // Round the corners of the background
        .overlay( // Add a border using an overlay with a RoundedRectangle
            RoundedRectangle(cornerRadius: 8)
                .stroke(Color.accentColor, lineWidth: 2))
        .controlSize(.large)
      
    }
    
    func increment() {
        if quantity < 9 {
            quantity += 1
        }
    }
    
    func decrement() {
        if quantity > 1 {
            quantity -= 1
        }
    }
}
