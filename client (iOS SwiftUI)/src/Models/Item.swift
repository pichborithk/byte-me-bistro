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
    let imageUrl: String
    let category: String
}

enum RequestError: Error {
    case invalidURL
    case requestFailed
    case invalidData
}

struct APIResponse<T: Codable>: Codable {
    let isSuccess: Bool
    let message: String
    let data: T
}
