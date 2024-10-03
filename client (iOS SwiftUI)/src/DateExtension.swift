//
//  DateExtension.swift
//  Byte-Me-Bistro
//
//  Created by Pichborith Kong on 10/1/24.
//

import Foundation

extension Date {
    var sevenDayLater: Date {
        Calendar.current.date(byAdding: .day, value: 7, to: Date())!
    }
}
