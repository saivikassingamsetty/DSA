
var Twitter = function () {
    // Map <User, {posts: MinHeap<Tweet, DateinMS>, following: Set<Userid>}>
    this.twitter = new Map();
    this.time = 0;
};

Twitter.prototype.createUser = function (userId) {
    this.twitter.set(userId, { posts: [], following: new Set() })
}

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
    if (!this.twitter.has(userId)) this.createUser(userId);

    this.twitter.get(userId).posts.push([tweetId, this.time++]);
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
    if (!this.twitter.has(userId)) this.createUser(userId);

    let totalTweets = [...this.twitter.get(userId).posts];
    for (let followee of this.twitter.get(userId).following) {
        totalTweets.push(...this.twitter.get(followee).posts.slice(-10));
    }

    totalTweets.sort((a,b) => b[1] - a[1]);

    return totalTweets.slice(0, 10).map(([tweetId, date]) => tweetId);
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
    if (!this.twitter.has(followerId)) this.createUser(followerId);
    if (!this.twitter.has(followeeId)) this.createUser(followeeId);

    if (followerId == followeeId) return;

    this.twitter.get(followerId).following.add(followeeId);
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
    if (!this.twitter.has(followerId)) this.createUser(followerId);
    if (!this.twitter.has(followeeId)) this.createUser(followeeId);

    this.twitter.get(followerId).following.delete(followeeId);
};

/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */