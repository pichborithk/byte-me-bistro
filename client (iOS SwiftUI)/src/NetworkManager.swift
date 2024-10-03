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

    func getMenu() async throws -> [Item] {
        guard let url = URL(string: baseUrl + "/items") else {
            throw RequestError.invalidURL
        }

        let (data, _) = try await URLSession.shared.data(from: url)
 
        do {
            let result = try JSONDecoder().decode(APIResponse<[Item]>.self, from: data)
            return result.data
        } catch {
            throw RequestError.invalidData
        }
    }

    func createReservation(from reservation: ReservationRequest) async throws {
        guard let url = URL(string: baseUrl + "/reservations") else {
            throw RequestError.invalidURL
        }

        var request = URLRequest(url: url)
        request.httpMethod = "POST"
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")
        
        guard let JSONData = try? JSONEncoder().encode(reservation) else {
            throw RequestError.invalidData
        }
        
        request.httpBody = JSONData
        
        guard let (data, _) = try? await URLSession.shared.data(for: request) else {
            throw RequestError.requestFailed
        }
        
        guard let result = try? JSONDecoder().decode(ReservationResponse.self, from: data) else {
            throw RequestError.invalidData
        }
    
        print(result)
    }
}
