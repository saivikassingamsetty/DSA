/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
    const fn = (a,b) => a-b;
    seats.sort(fn);
    students.sort(fn);

    return seats.reduce((acc, _, i) => acc + Math.abs(seats[i] - students[i]), 0);
};