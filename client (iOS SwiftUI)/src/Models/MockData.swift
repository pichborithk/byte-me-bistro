//
//  MockData.swift
//  Byte-Me-Bistro
//
//  Created by Pichborith Kong on 9/26/24.
//

import Foundation

struct MockData {
    static let sampleItem = Item(id: 1,
                                 name: "Spring Rolls",
                                 price: 5.99,
                                 imageUrl: "https://seanallen-course-backend.herokuapp.com/images/appetizers/asian-flank-steak.jpg",
                                 category: "Appetizers")
    
    static let items = [sampleItem, sampleItem, sampleItem]
}
