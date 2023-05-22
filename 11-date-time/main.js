import {
    LocalDate,
    LocalTime,
    LocalDateTime,
    DateTimeFormatter
} from '@js-joda/core';

const today = LocalDate.now();
const newDate = today.plusYears(1);
const strDate = newDate
    .format(DateTimeFormatter.ofPattern('yyyy|MM|dd'));
console.log(strDate);