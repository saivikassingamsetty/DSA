var reversePairs = function (nums) {
    let inversions = 0;

    const merge = (arr1, arr2) => {
        let arr3 = [];
        let i = 0;
        let j = 0;

        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] > 2 * arr2[j]) {
                j++;
                inversions += (arr1.length - i);
            } else {
                i++;
            }
        }

        i = 0;
        j = 0;

        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] <= arr2[j]) arr3.push(arr1[i++])
            else arr3.push(arr2[j++])
        }

        while (i < arr1.length) arr3.push(arr1[i++]);
        while (j < arr2.length) arr3.push(arr2[j++]);

        return arr3;
    }

    const mergeSort = (start, end) => {
        if (start > end) return [];
        if (start == end) return [nums[start]];

        let mid = start + Math.floor((end - start) / 2)
        let left = mergeSort(start, mid);
        let right = mergeSort(mid + 1, end);

        return merge(left, right);
    }

    mergeSort(0, nums.length - 1);

    return inversions;
};
