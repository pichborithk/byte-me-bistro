//
//  Item.swift
//  Byte-Me-Bistro
//
//  Created by Pichborith Kong on 9/26/24.
//

import Foundation

struct Item: Codable, Identifiable {
    let id: Int
    let name: String
    let price: Double
    let category: String
}
