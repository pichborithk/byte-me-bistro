//
//  DismissButton.swift
//  Byte-Me-Bistro
//
//  Created by Pichborith Kong on 10/1/24.
//

import SwiftUI

#Preview {
    DismissButton(isPresented: .constant(true))
}

struct DismissButton: View {
    @Binding var isPresented: Bool
    
    var body: some View {
        HStack {
            Spacer()
            
            Button {
                isPresented = false
            } label: {
                Image(systemName: "xmark")
                    .foregroundColor(Color(.label))
                    .imageScale(.large)
                    .frame(width: 40, height: 40)
            }
        }
    }
}
