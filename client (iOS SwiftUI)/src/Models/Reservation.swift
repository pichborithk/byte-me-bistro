//
//  Reservation.swift
//  Byte-Me-Bistro
//
//  Created by Pichborith Kong on 10/2/24.
//

import Foundation

struct Reservation: Codable, Identifiable {
    var id = 0
    var name = ""
    var phoneNumber = ""
    var partySize = 1
    var date = Date.now
    var time = Date.now
    
    static func toRequest(_ reservation: Reservation) -> ReservationRequest {
        //        let dateFormatter = DateFormatter()
        //        dateFormatter.dateFormat = "yyyy-MM-dd"
        //        self.date = dateFormatter.string(from: date)
        //
        //        let adjustedDate = Calendar.current.date(bySetting: .second, value: 0, of: time)!
        //        let timeFormatter = DateFormatter()
        //        timeFormatter.dateFormat = "HH:mm:ss"
        //        self.time = timeFormatter.string(from: adjustedDate)
        
        let formatter = ISO8601DateFormatter()
        let date = formatter.string(from: reservation.date)
        let time = formatter.string(from: reservation.time)

        return ReservationRequest(name: reservation.name,
                                  phoneNumber: reservation.phoneNumber,
                                  partySize: reservation.partySize,
                                  date: date,
                                  time: time)
    }
}

struct ReservationRequest: Encodable {
    let name: String
    let phoneNumber: String
    let partySize: Int
    var date: String
    var time: String
}

struct ReservationResponse: Decodable, Identifiable {
    let id: Int
    let name: String
    let phoneNumber: String
    let partySize: Int
    let date: String
    let time: String
}
