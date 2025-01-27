class DisjointSet {
  constructor() {
    this.rank = new Map();
    this.parent = new Map();
    this.size = new Map();
  }

  findParent(node) {
    if (!this.parent.has(node)) this.parent.set(node, node);
    if (this.parent.get(node) == node) return node;
    // return findParent(this.parent.get(node));
    this.parent.set(node, this.findParent(this.parent.get(node))); //path compression
    return this.parent.get(node);
  }

  unionByRank(u, v) {
    const ultimateParentU = this.findParent(u);
    const ultimateParentV = this.findParent(v);
    if (ultimateParentU == ultimateParentV) return;

    if (!this.rank.has(ultimateParentU)) this.rank.set(ultimateParentU, 0);
    if (!this.rank.has(ultimateParentV)) this.rank.set(ultimateParentV, 0);

    if (this.rank[ultimateParentU] == this.rank[ultimateParentV]) {
      this.parent.set(ultimateParentV, ultimateParentU);
      this.rank.set(ultimateParentU, this.rank.get(ultimateParentU) + 1);
    } else if (this.rank[ultimateParentU] < this.rank[ultimateParentV]) {
      this.parent.set(ultimateParentU, ultimateParentV);
    } else {
      this.parent.set(ultimateParentV, ultimateParentU);
    }
  }

  unionBySize(u, v) {
    const ultimateParentU = this.findParent(u);
    const ultimateParentV = this.findParent(v);
    if (ultimateParentU == ultimateParentV) return;

    if (!this.size.has(ultimateParentU)) this.size.set(ultimateParentU, 1);
    if (!this.size.has(ultimateParentV)) this.size.set(ultimateParentV, 1);

    if (this.rank[ultimateParentU] < this.rank[ultimateParentV]) {
      this.parent.set(ultimateParentU, ultimateParentV);
      this.size.set(
        ultimateParentV,
        this.size.get(ultimateParentU) + this.size.get(ultimateParentV)
      );
    } else {
      this.parent.set(ultimateParentV, ultimateParentU);
      this.size.set(
        ultimateParentU,
        this.size.get(ultimateParentU) + this.size.get(ultimateParentV)
      );
    }
  }
}

let ds = new DisjointSet();
ds.unionByRank(1, 2);
ds.unionByRank(2, 3);
ds.unionByRank(4, 5);
ds.unionByRank(6, 7);
ds.unionByRank(5, 6);
ds.unionByRank(3, 7);

console.log(ds.parent, ds.rank);

if (ds.findParent(3) == ds.findParent(7)) {
  console.log("Same Parent");
} else {
  console.log("Different Parent");
}

if (ds.findParent(1) == ds.findParent(4)) {
  console.log("Same Parent");
} else {
  console.log("Different Parent");
}

console.log("--".repeat(50));

let ds1 = new DisjointSet();
ds1.unionByRank(1, 2);
ds1.unionByRank(2, 3);
ds1.unionByRank(4, 5);
ds1.unionByRank(6, 7);
ds1.unionByRank(5, 6);
ds1.unionByRank(3, 7);

console.log(ds1.parent, ds1.rank);

if (ds1.findParent(3) == ds1.findParent(7)) {
  console.log("Same Parent");
} else {
  console.log("Different Parent");
}

if (ds1.findParent(1) == ds1.findParent(4)) {
  console.log("Same Parent");
} else {
  console.log("Different Parent");
}
