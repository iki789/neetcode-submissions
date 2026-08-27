class DynamicArray:
    
    def __init__(self, capacity: int):
        self.capacity = capacity
        self.arr = [0] * capacity
        self.length = 0


    def get(self, i: int) -> int:
        return self.arr[i]


    def set(self, i: int, n: int) -> None:
        self.arr[i] = n

    # Insert n in the last position of the array
    def pushback(self, n: int) -> None:
        if self.capacity == self.length:
            self.resize()
        
        self.arr[self.length] = n
        self.length += 1


    def popback(self) -> int:
        if self.length > 0:
            self.length -= 1
        return self.arr[self.length]
        

    def resize(self) -> None:
        self.capacity = self.length * 2
        new_arr = [0] * self.capacity

        for i, v in enumerate(self.arr):
            new_arr[i] = v
        self.arr = new_arr


    def getSize(self) -> int:
        return self.length
    
    def getCapacity(self) -> int:
        return self.capacity

