//
//  MenuViewModel.swift
//  Byte-Me-Bistro
//
//  Created by Pichborith Kong on 9/26/24.
//

import SwiftUI

@MainActor class MenuViewModel: ObservableObject {
    
    @Published var menu: [Item] = []
    
    func fetchMenu() async {
        do {
            menu = try await NetworkManager.shared.getMenu()
        } catch {
            print(error)
        }
    }
}
