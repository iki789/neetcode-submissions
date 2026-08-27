class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        count = {} # keep track of counts {n: count}
        freq = [[] for _ in range(len(nums) + 1)] # length of the array [count -> value]
        res = []

        for n in nums:
            count[n] = count.get(n, 0) + 1
        for num, cnt  in count.items():
            freq[cnt].append(num)
        
        # get top K
        for i in range(len(freq) - 1, 0, -1):
            for f in freq[i]:
                res.append(f)
                if len(res) == k:
                    return res

            
