/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
    let vis = new Set(rooms.map((i, id) => id));

    const visit = (room) => {
        vis.delete(room);
        for (let key of rooms[room]) if (vis.has(key)) visit(key);
    }

    visit(0);
    return !vis.size;
};