//
//  NetworkManager.swift
//  Byte-Me-Bistro
//
//  Created by Pichborith Kong on 9/26/24.
//

import UIKit

class NetworkManager {
    
    static let shared = NetworkManager()
    private let baseUrl = "http://localhost:1337/api"
    
    func getMenu() async throws-> [Item] {
        guard let url = URL(string: baseUrl + "/items") else {
            throw RequestError.invalidURL
        }
        
        let (data, _) = try await URLSession.shared.data(from: url)
        print(data)
        do {
            let result = try JSONDecoder().decode(APIResponse<[Item]>.self, from: data)
            return result.data
        } catch {
            throw RequestError.invalidData
        }
    }
}
