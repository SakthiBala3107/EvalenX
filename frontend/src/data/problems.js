export const PROBLEMS = {
  "two-sum": {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: "Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target.",
      notes: [
        "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
        "You can return the answer in any order.",
      ],
    },
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0,1]",
      },
    ],
    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
      "Only one valid answer exists",
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) {
  // Write your solution here
  
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Expected: [1, 2]
console.log(twoSum([3, 3], 6)); // Expected: [0, 1]`,
      python: `def twoSum(nums, target):
    # Write your solution here
    pass

# Test cases
print(twoSum([2, 7, 11, 15], 9))  # Expected: [0, 1]
print(twoSum([3, 2, 4], 6))  # Expected: [1, 2]
print(twoSum([3, 3], 6))  # Expected: [0, 1]`,
      java: `import java.util.*;

class Solution {
    public static int[] twoSum(int[] nums, int target) {
        // Write your solution here
        
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(twoSum(new int[]{2, 7, 11, 15}, 9))); // Expected: [0, 1]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 2, 4}, 6))); // Expected: [1, 2]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 3}, 6))); // Expected: [0, 1]
    }
}`,
    },
    expectedOutput: {
      javascript: "[0,1]\n[1,2]\n[0,1]",
      python: "[0, 1]\n[1, 2]\n[0, 1]",
      java: "[0, 1]\n[1, 2]\n[0, 1]",
    },
  },

  "reverse-string": {
    id: "reverse-string",
    title: "Reverse String",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "Write a function that reverses a string. The input string is given as an array of characters s.",
      notes: [
        "You must do this by modifying the input array in-place with O(1) extra memory.",
      ],
    },
    examples: [
      {
        input: 's = ["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
      },
      {
        input: 's = ["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]',
      },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁵", "s[i] is a printable ascii character"],
    starterCode: {
      javascript: `function reverseString(s) {
  // Write your solution here
  
}

// Test cases
let test1 = ["h","e","l","l","o"];
reverseString(test1);
console.log(test1); // Expected: ["o","l","l","e","h"]

let test2 = ["H","a","n","n","a","h"];
reverseString(test2);
console.log(test2); // Expected: ["h","a","n","n","a","H"]`,
      python: `def reverseString(s):
    # Write your solution here
    pass

# Test cases
test1 = ["h","e","l","l","o"]
reverseString(test1)
print(test1)  # Expected: ["o","l","l","e","h"]

test2 = ["H","a","n","n","a","h"]
reverseString(test2)
print(test2)  # Expected: ["h","a","n","n","a","H"]`,
      java: `import java.util.*;

class Solution {
    public static void reverseString(char[] s) {
        // Write your solution here
        
    }
    
    public static void main(String[] args) {
        char[] test1 = {'h','e','l','l','o'};
        reverseString(test1);
        System.out.println(Arrays.toString(test1)); // Expected: [o, l, l, e, h]
        
        char[] test2 = {'H','a','n','n','a','h'};
        reverseString(test2);
        System.out.println(Arrays.toString(test2)); // Expected: [h, a, n, n, a, H]
    }
}`,
    },
    expectedOutput: {
      javascript: '["o","l","l","e","h"]\n["h","a","n","n","a","H"]',
      python: "['o', 'l', 'l', 'e', 'h']\n['h', 'a', 'n', 'n', 'a', 'H']",
      java: "[o, l, l, e, h]\n[h, a, n, n, a, H]",
    },
  },

  "valid-palindrome": {
    id: "valid-palindrome",
    title: "Valid Palindrome",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.",
      notes: [
        "Given a string s, return true if it is a palindrome, or false otherwise.",
      ],
    },
    examples: [
      {
        input: 's = "A man, a plan, a canal: Panama"',
        output: "true",
        explanation: '"amanaplanacanalpanama" is a palindrome.',
      },
      {
        input: 's = "race a car"',
        output: "false",
        explanation: '"raceacar" is not a palindrome.',
      },
      {
        input: 's = " "',
        output: "true",
        explanation:
          's is an empty string "" after removing non-alphanumeric characters. Since an empty string reads the same forward and backward, it is a palindrome.',
      },
    ],
    constraints: [
      "1 ≤ s.length ≤ 2 * 10⁵",
      "s consists only of printable ASCII characters",
    ],
    starterCode: {
      javascript: `function isPalindrome(s) {
  // Write your solution here
  
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
console.log(isPalindrome("race a car")); // Expected: false
console.log(isPalindrome(" ")); // Expected: true`,
      python: `def isPalindrome(s):
    # Write your solution here
    pass

# Test cases
print(isPalindrome("A man, a plan, a canal: Panama"))  # Expected: True
print(isPalindrome("race a car"))  # Expected: False
print(isPalindrome(" "))  # Expected: True`,
      java: `class Solution {
    public static boolean isPalindrome(String s) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
        System.out.println(isPalindrome("race a car")); // Expected: false
        System.out.println(isPalindrome(" ")); // Expected: true
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
    },
  },

  "maximum-subarray": {
    id: "maximum-subarray",
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: "Array • Dynamic Programming",
    description: {
      text: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
        explanation: "The subarray [4,-1,2,1] has the largest sum 6.",
      },
      {
        input: "nums = [1]",
        output: "1",
        explanation: "The subarray [1] has the largest sum 1.",
      },
      {
        input: "nums = [5,4,-1,7,8]",
        output: "23",
        explanation: "The subarray [5,4,-1,7,8] has the largest sum 23.",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxSubArray(nums) {
  // Write your solution here
  
}

// Test cases
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Expected: 6
console.log(maxSubArray([1])); // Expected: 1
console.log(maxSubArray([5,4,-1,7,8])); // Expected: 23`,
      python: `def maxSubArray(nums):
    # Write your solution here
    pass

# Test cases
print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))  # Expected: 6
print(maxSubArray([1]))  # Expected: 1
print(maxSubArray([5,4,-1,7,8]))  # Expected: 23`,
      java: `class Solution {
    public static int maxSubArray(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4})); // Expected: 6
        System.out.println(maxSubArray(new int[]{1})); // Expected: 1
        System.out.println(maxSubArray(new int[]{5,4,-1,7,8})); // Expected: 23
    }
}`,
    },
    expectedOutput: {
      javascript: "6\n1\n23",
      python: "6\n1\n23",
      java: "6\n1\n23",
    },
  },

  "container-with-most-water": {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: {
      text: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).",
      notes: [
        "Find two lines that together with the x-axis form a container, such that the container contains the most water.",
        "Return the maximum amount of water a container can store.",
        "Notice that you may not slant the container.",
      ],
    },
    examples: [
      {
        input: "height = [1,8,6,2,5,4,8,3,7]",
        output: "49",
        explanation:
          "The vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water the container can contain is 49.",
      },
      {
        input: "height = [1,1]",
        output: "1",
      },
    ],
    constraints: ["n == height.length", "2 ≤ n ≤ 10⁵", "0 ≤ height[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxArea(height) {
  // Write your solution here
  
}

// Test cases
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Expected: 49
console.log(maxArea([1,1])); // Expected: 1`,
      python: `def maxArea(height):
    # Write your solution here
    pass

# Test cases
print(maxArea([1,8,6,2,5,4,8,3,7]))  # Expected: 49
print(maxArea([1,1]))  # Expected: 1`,
      java: `class Solution {
    public static int maxArea(int[] height) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxArea(new int[]{1,8,6,2,5,4,8,3,7})); // Expected: 49
        System.out.println(maxArea(new int[]{1,1})); // Expected: 1
    }
}`,
    },
    expectedOutput: {
      javascript: "49\n1",
      python: "49\n1",
      java: "49\n1",
    },
  },

  //
  "best-time-to-buy-and-sell-stock": {
    id: "best-time-to-buy-and-sell-stock",
    title: "Best Time to Buy and Sell Stock",
    difficulty: "Easy",
    category: "Array • Greedy",
    description: {
      text: "You are given an array prices where prices[i] is the price of a stock on the ith day. Return the maximum profit you can achieve from a single buy and sell.",
      notes: ["You must buy before you sell."],
    },
    examples: [
      {
        input: "prices = [7,1,5,3,6,4]",
        output: "5",
        explanation: "Buy on day 2 (price 1) and sell on day 5 (price 6).",
      },
      {
        input: "prices = [7,6,4,3,1]",
        output: "0",
        explanation: "No profitable transaction possible.",
      },
    ],
    constraints: ["1 ≤ prices.length ≤ 10⁵", "0 ≤ prices[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxProfit(prices) {
  // Write your solution here
  
}

// Test cases
console.log(maxProfit([7,1,5,3,6,4])); // Expected: 5
console.log(maxProfit([7,6,4,3,1])); // Expected: 0`,
      python: `def maxProfit(prices):
    # Write your solution here
    pass

# Test cases
print(maxProfit([7,1,5,3,6,4]))  # Expected: 5
print(maxProfit([7,6,4,3,1]))  # Expected: 0`,
      java: `class Solution {
    public static int maxProfit(int[] prices) {
        // Write your solution here
        
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(maxProfit(new int[]{7,1,5,3,6,4})); // Expected: 5
        System.out.println(maxProfit(new int[]{7,6,4,3,1})); // Expected: 0
    }
}`,
    },
    expectedOutput: {
      javascript: "5\n0",
      python: "5\n0",
      java: "5\n0",
    },
  },

  "merge-two-sorted-lists": {
    id: "merge-two-sorted-lists",
    title: "Merge Two Sorted Lists",
    difficulty: "Easy",
    category: "Linked List",
    description: {
      text: "Merge two sorted linked lists and return it as a new sorted list.",
      notes: ["Both lists may be empty."],
    },
    examples: [
      {
        input: "l1 = [1,2,4], l2 = [1,3,4]",
        output: "[1,1,2,3,4,4]",
        explanation: "",
      },
      {
        input: "l1 = [], l2 = []",
        output: "[]",
        explanation: "",
      },
    ],
    constraints: ["0 ≤ list.length ≤ 50", "-100 ≤ Node.val ≤ 100"],
    starterCode: {
      javascript: `function mergeTwoLists(l1, l2) {
  // Linked list nodes assumed to be objects: { val, next }
  // Write your solution here
  
}`,
      python: `def mergeTwoLists(l1, l2):
    # Write your solution here
    pass`,
      java: `class ListNode {
    int val;
    ListNode next;
    ListNode(int x) { val = x; }
}

class Solution {
    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        // Write your solution here
        
        return null;
    }
}`,
    },
    expectedOutput: {
      javascript: "[1,1,2,3,4,4]",
      python: "[1,1,2,3,4,4]",
      java: "[1,1,2,3,4,4]",
    },
  },

  "min-stack": {
    id: "min-stack",
    title: "Min Stack",
    difficulty: "Medium",
    category: "Stack • Design",
    description: {
      text: "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.",
      notes: [
        "All operations should run in O(1) time complexity.",
        "You must design the data structure without using built-in min/max functions.",
      ],
    },
    examples: [
      {
        input: "push(-2), push(0), push(-3), getMin()",
        output: "-3",
        explanation: "After pushing values [-2, 0, -3], the minimum is -3.",
      },
      {
        input: "push(1), push(2), pop(), top()",
        output: "1",
        explanation: "After popping 2, the top of the stack is 1.",
      },
    ],
    constraints: ["Operations count ≤ 10⁴", "All values are integers"],
    starterCode: {
      javascript: `class MinStack {
  constructor() {
    // Write your solution here
  }

  push(val) {
    // Write your solution here
  }

  pop() {
    // Write your solution here
  }

  top() {
    // Write your solution here
  }

  getMin() {
    // Write your solution here
  }
}

// Example usage:
const stack = new MinStack();
stack.push(-2);
stack.push(0);
stack.push(-3);
console.log(stack.getMin()); // Expected: -3`,

      python: `class MinStack:
    def __init__(self):
        # Write your solution here
        pass

    def push(self, val):
        # Write your solution here
        pass

    def pop(self):
        # Write your solution here
        pass

    def top(self):
        # Write your solution here
        pass

    def getMin(self):
        # Write your solution here
        pass

# Example usage:
stack = MinStack()
stack.push(-2)
stack.push(0)
stack.push(-3)
print(stack.getMin())  # Expected: -3`,

      java: `class MinStack {

    public MinStack() {
        // Write your solution here
    }
    
    public void push(int val) {
        // Write your solution here
    }

    public void pop() {
        // Write your solution here
    }

    public int top() {
        // Write your solution here
        return 0;
    }

    public int getMin() {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        MinStack stack = new MinStack();
        stack.push(-2);
        stack.push(0);
        stack.push(-3);
        System.out.println(stack.getMin()); // Expected: -3
    }
}`,
    },
    expectedOutput: {
      javascript: "-3",
      python: "-3",
      java: "-3",
    },
  },

  "binary-search": {
    id: "binary-search",
    title: "Binary Search",
    difficulty: "Easy",
    category: "Binary Search",
    description: {
      text: "Given a sorted array and a target, return index of target or -1 if not found.",
      notes: [],
    },
    examples: [
      { input: "nums = [-1,0,3,5,9,12], target = 9", output: "4" },
      { input: "nums = [-1,0,3,5,9,12], target = 2", output: "-1" },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁴"],
    starterCode: {
      javascript: `function search(nums, target) {
  // Write your solution here
  
}

// Test cases
console.log(search([-1,0,3,5,9,12], 9)); // Expected: 4
console.log(search([-1,0,3,5,9,12], 2)); // Expected: -1`,
      python: `def search(nums, target):
    # Write your solution here
    pass

print(search([-1,0,3,5,9,12], 9))  # Expected: 4
print(search([-1,0,3,5,9,12], 2))  # Expected: -1`,
      java: `class Solution {
    public static int search(int[] nums, int target) {
        // Write your solution here
        
        return -1;
    }

    public static void main(String[] args) {
        System.out.println(search(new int[]{-1,0,3,5,9,12}, 9)); // Expected: 4
        System.out.println(search(new int[]{-1,0,3,5,9,12}, 2)); // Expected: -1
    }
}`,
    },
    expectedOutput: {
      javascript: "4\n-1",
      python: "4\n-1",
      java: "4\n-1",
    },
  },

  "flood-fill": {
    id: "flood-fill",
    title: "Flood Fill",
    difficulty: "Easy",
    category: "DFS • Matrix",
    description: {
      text: "Perform a flood fill on a given 2D image starting at (sr, sc).",
      notes: [],
    },
    examples: [
      {
        input: "image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2",
        output: "[[2,2,2],[2,2,0],[2,0,1]]",
      },
    ],
    constraints: ["1 ≤ image.length ≤ 50"],
    starterCode: {
      javascript: `function floodFill(image, sr, sc, color) {
  // Write your solution here
  
}

// Test case
console.log(floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2));`,
      python: `def floodFill(image, sr, sc, color):
    # Write your solution here
    pass

print(floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2))`,
      java: `class Solution {
    public static int[][] floodFill(int[][] image, int sr, int sc, int color) {
        // Write your solution here
        
        return image;
    }

    public static void main(String[] args) {
        int[][] r = floodFill(new int[][]{{1,1,1},{1,1,0},{1,0,1}}, 1, 1, 2);
    }
}`,
    },
    expectedOutput: {
      javascript: "[[2,2,2],[2,2,0],[2,0,1]]",
      python: "[[2,2,2],[2,2,0],[2,0,1]]",
      java: "[[2,2,2],[2,2,0],[2,0,1]]",
    },
  },

  "search-insert-position": {
    id: "search-insert-position",
    title: "Search Insert Position",
    difficulty: "Easy",
    category: "Binary Search",
    description: {
      text: "Given a sorted array and target, return the index where it should be inserted.",
      notes: [],
    },
    examples: [
      { input: "nums = [1,3,5,6], target = 5", output: "2" },
      { input: "nums = [1,3,5,6], target = 2", output: "1" },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁴"],
    starterCode: {
      javascript: `function searchInsert(nums, target) {
  // Write your solution here
  
}

// Test cases
console.log(searchInsert([1,3,5,6], 5)); // 2
console.log(searchInsert([1,3,5,6], 2)); // 1`,
      python: `def searchInsert(nums, target):
    # Write your solution here
    pass

print(searchInsert([1,3,5,6], 5))  # 2
print(searchInsert([1,3,5,6], 2))  # 1`,
      java: `class Solution {
    public static int searchInsert(int[] nums, int target) {
        // Write your solution here
        
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(searchInsert(new int[]{1,3,5,6}, 5)); // 2
        System.out.println(searchInsert(new int[]{1,3,5,6}, 2)); // 1
    }
}`,
    },
    expectedOutput: {
      javascript: "2\n1",
      python: "2\n1",
      java: "2\n1",
    },
  },

  "valid-parentheses": {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    difficulty: "Easy",
    category: "Stack • String",
    description: {
      text: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. A string is valid if brackets close in the correct order.",
    },
    examples: [
      {
        input: "s = '()[]{}'",
        output: "true",
      },
      {
        input: "s = '(]'",
        output: "false",
      },
    ],
    constraints: ["1 <= s.length <= 10^4"],
    starterCode: {
      javascript: "var isValid = function(s) { };",
      python: "class Solution:\n    def isValid(self, s: str) -> bool:",
      java: "class Solution {\n    public boolean isValid(String s) {\n    }\n}",
    },
    expectedOutput: "true or false",
  },

  "invert-binary-tree": {
    id: "invert-binary-tree",
    title: "Invert Binary Tree",
    difficulty: "Easy",
    category: "Tree • DFS",
    description: {
      text: "Invert a binary tree by swapping the left and right children.",
    },
    examples: [
      {
        input: "root = [4,2,7,1,3,6,9]",
        output: "[4,7,2,9,6,3,1]",
      },
    ],
    constraints: ["0 <= tree size <= 1000"],
    starterCode: {
      javascript: "var invertTree = function(root) { };",
      python: "class Solution:\n    def invertTree(self, root):",
      java: "class Solution {\n    public TreeNode invertTree(TreeNode root) {\n    }\n}",
    },
    expectedOutput: "Inverted binary tree",
  },

  "reverse-linked-list": {
    id: "reverse-linked-list",
    title: "Reverse Linked List",
    difficulty: "Easy",
    category: "Linked List",
    description: {
      text: "Reverse a singly linked list.",
    },
    examples: [
      {
        input: "head = [1,2,3,4,5]",
        output: "[5,4,3,2,1]",
      },
    ],
    constraints: ["0 <= list length <= 5000"],
    starterCode: {
      javascript: "var reverseList = function(head) { };",
      python: "class Solution:\n    def reverseList(self, head):",
      java: "class Solution {\n    public ListNode reverseList(ListNode head) {\n    }\n}",
    },
    expectedOutput: "reversed linked list",
  },

  //

  "spiral-matrix": {
    id: "spiral-matrix",
    title: "Spiral Matrix",
    difficulty: "Medium",
    category: "Matrix • Simulation",
    description: {
      text: "Given an m x n matrix, return all elements in spiral order.",
    },
    examples: [
      {
        input: "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
        output: "[1,2,3,6,9,8,7,4,5]",
      },
    ],
    constraints: ["1 <= m, n <= 10"],
    starterCode: {
      javascript: "var spiralOrder = function(matrix) { };",
      python:
        "class Solution:\n    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:",
      java: "class Solution {\n    public List<Integer> spiralOrder(int[][] matrix) {\n    }\n}",
    },
    expectedOutput: "spiral array",
  },

  "set-matrix-zeroes": {
    id: "set-matrix-zeroes",
    title: "Set Matrix Zeroes",
    difficulty: "Medium",
    category: "Matrix • Hashing",
    description: {
      text: "Given an m x n matrix, if an element is 0, set its entire row and column to 0.",
    },
    examples: [
      {
        input: "matrix = [[1,1,1],[1,0,1],[1,1,1]]",
        output: "[[1,0,1],[0,0,0],[1,0,1]]",
      },
    ],
    constraints: ["1 <= m, n <= 200"],
    starterCode: {
      javascript: "var setZeroes = function(matrix) { };",
      python:
        "class Solution:\n    def setZeroes(self, matrix: List[List[int]]) -> None:",
      java: "class Solution {\n    public void setZeroes(int[][] matrix) {\n    }\n}",
    },
    expectedOutput: "modified matrix",
  },

  "word-search": {
    id: "word-search",
    title: "Word Search",
    difficulty: "Medium",
    category: "Backtracking",
    description: {
      text: "Given a board and a word, return true if the word exists in the grid via DFS.",
    },
    examples: [
      {
        input:
          "board = [['A','B','C','E'],['S','F','C','S'],['A','D','E','E']], word = 'ABCCED'",
        output: "true",
      },
    ],
    constraints: ["1 <= board dimensions <= 6"],
    starterCode: {
      javascript: "var exist = function(board, word) { };",
      python:
        "class Solution:\n    def exist(self, board: List[List[str]], word: str) -> bool:",
      java: "class Solution {\n    public boolean exist(char[][] board, String word) {\n    }\n}",
    },
    expectedOutput: "true or false",
  },

  "search-in-rotated-sorted-array": {
    id: "search-in-rotated-sorted-array",
    title: "Search in Rotated Sorted Array",
    difficulty: "Medium",
    category: "Binary Search",
    description: {
      text: "Given a rotated sorted array, search for a target value in O(log n).",
    },
    examples: [
      {
        input: "nums = [4,5,6,7,0,1,2], target = 0",
        output: "4",
      },
    ],
    constraints: ["1 <= nums.length <= 10^4"],
    starterCode: {
      javascript: "var search = function(nums, target) { };",
      python:
        "class Solution:\n    def search(self, nums: List[int], target: int) -> int:",
      java: "class Solution {\n    public int search(int[] nums, int target) {\n    }\n}",
    },
    expectedOutput: "index or -1",
  },

  permutations: {
    id: "permutations",
    title: "Permutations",
    difficulty: "Medium",
    category: "Backtracking",
    description: {
      text: "Return all possible permutations of nums.",
    },
    examples: [
      {
        input: "nums = [1,2,3]",
        output: "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]",
      },
    ],
    constraints: ["1 <= nums.length <= 6"],
    starterCode: {
      javascript: "var permute = function(nums) { };",
      python:
        "class Solution:\n    def permute(self, nums: List[int]) -> List[List[int]]:",
      java: "class Solution {\n    public List<List<Integer>> permute(int[] nums) {\n    }\n}",
    },
    expectedOutput: "list of permutations",
  },

  subsets: {
    id: "subsets",
    title: "Subsets",
    difficulty: "Medium",
    category: "Backtracking",
    description: {
      text: "Return all possible subsets of nums.",
    },
    examples: [
      {
        input: "nums = [1,2,3]",
        output: "[[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]",
      },
    ],
    constraints: ["1 <= nums.length <= 10"],
    starterCode: {
      javascript: "var subsets = function(nums) { };",
      python:
        "class Solution:\n    def subsets(self, nums: List[int]) -> List[List[int]]:",
      java: "class Solution {\n    public List<List<Integer>> subsets(int[] nums) {\n    }\n}",
    },
    expectedOutput: "list of subsets",
  },

  "letter-combinations-of-phone-number": {
    id: "letter-combinations-of-phone-number",
    title: "Letter Combinations of a Phone Number",
    difficulty: "Medium",
    category: "String • Backtracking",
    description: {
      text: "Return all possible letter combinations for the given digits (phone keypad).",
    },
    examples: [
      {
        input: "digits = '23'",
        output: "['ad','ae','af','bd','be','bf','cd','ce','cf']",
      },
    ],
    constraints: ["0 <= digits.length <= 4"],
    starterCode: {
      javascript: "var letterCombinations = function(digits) { };",
      python:
        "class Solution:\n    def letterCombinations(self, digits: str) -> List[str]:",
      java: "class Solution {\n    public List<String> letterCombinations(String digits) {\n    }\n}",
    },
    expectedOutput: "list of strings",
  },

  "combination-sum": {
    id: "combination-sum",
    title: "Combination Sum",
    difficulty: "Medium",
    category: "Backtracking",
    description: {
      text: "Given candidates and a target, return all unique combinations that sum to target.",
    },
    examples: [
      {
        input: "candidates = [2,3,6,7], target = 7",
        output: "[[7],[2,2,3]]",
      },
    ],
    constraints: ["1 <= candidates.length <= 30"],
    starterCode: {
      javascript: "var combinationSum = function(candidates, target) { };",
      python:
        "class Solution:\n    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:",
      java: "class Solution {\n    public List<List<Integer>> combinationSum(int[] candidates, int target) {\n    }\n}",
    },
    expectedOutput: "list of combinations",
  },

  "merge-intervals": {
    id: "merge-intervals",
    title: "Merge Intervals",
    difficulty: "Medium",
    category: "Sorting",
    description: {
      text: "Merge all overlapping intervals and return the result.",
    },
    examples: [
      {
        input: "intervals = [[1,3],[2,6],[8,10],[15,18]]",
        output: "[[1,6],[8,10],[15,18]]",
      },
    ],
    constraints: ["1 <= intervals.length <= 10^4"],
    starterCode: {
      javascript: "var merge = function(intervals) { };",
      python:
        "class Solution:\n    def merge(self, intervals: List[List[int]]) -> List[List[int]]:",
      java: "class Solution {\n    public int[][] merge(int[][] intervals) {\n    }\n}",
    },
    expectedOutput: "merged intervals",
  },

  //
  "kth-largest-element-in-an-array": {
    id: "kth-largest-element-in-an-array",
    title: "Kth Largest Element in an Array",
    difficulty: "Medium",
    category: "Array • Heap • Quickselect",
    description: {
      text: "Find the kth largest element in an unsorted array.",
    },
    examples: [
      {
        input: "nums = [3,2,1,5,6,4], k = 2",
        output: "5",
      },
    ],
    constraints: ["1 <= k <= nums.length <= 10^5", "-10^4 <= nums[i] <= 10^4"],
    starterCode: {
      js: "function findKthLargest(nums, k) {}",
      python: "def findKthLargest(nums, k):\n    pass",
      java: "class Solution { public int findKthLargest(int[] nums, int k) { return 0; }}",
    },
    expectedOutput: "5",
  },

  "remove-duplicates-from-sorted-array": {
    id: "remove-duplicates-from-sorted-array",
    title: "Remove Duplicates from Sorted Array",
    difficulty: "Easy",
    category: "Array • Two Pointers",
    description: {
      text: "Remove duplicates in-place from a sorted array.",
    },
    examples: [
      {
        input: "nums = [1,1,2]",
        output: "2, nums = [1,2,_]",
      },
    ],
    constraints: ["1 <= nums.length <= 3 * 10^4"],
    starterCode: {
      js: "function removeDuplicates(nums) {}",
      python: "def removeDuplicates(nums):\n    pass",
      java: "class Solution { public int removeDuplicates(int[] nums) { return 0; }}",
    },
    expectedOutput: "2",
  },

  "intersection-of-two-arrays": {
    id: "intersection-of-two-arrays",
    title: "Intersection of Two Arrays",
    difficulty: "Easy",
    category: "Array • Hash Set",
    description: {
      text: "Return the intersection of two arrays.",
    },
    examples: [
      {
        input: "nums1 = [1,2,2,1], nums2 = [2,2]",
        output: "[2]",
      },
    ],
    constraints: ["1 <= nums1.length, nums2.length <= 1000"],
    starterCode: {
      js: "function intersection(nums1, nums2) {}",
      python: "def intersection(nums1, nums2):\n    pass",
      java: "class Solution { public int[] intersection(int[] nums1, int[] nums2) { return null; }}",
    },
    expectedOutput: "[2]",
  },

  "plus-one": {
    id: "plus-one",
    title: "Plus One",
    difficulty: "Easy",
    category: "Array • Math",
    description: {
      text: "Increment the integer represented by an array of digits.",
    },
    examples: [
      {
        input: "digits = [1,2,3]",
        output: "[1,2,4]",
      },
    ],
    constraints: ["1 <= digits.length <= 100"],
    starterCode: {
      js: "function plusOne(digits) {}",
      python: "def plusOne(digits):\n    pass",
      java: "class Solution { public int[] plusOne(int[] digits) { return null; }}",
    },
    expectedOutput: "[1,2,4]",
  },

  "majority-element": {
    id: "majority-element",
    title: "Majority Element",
    difficulty: "Easy",
    category: "Array • Boyer-Moore",
    description: {
      text: "Return the element that appears more than n/2 times.",
    },
    examples: [
      {
        input: "nums = [3,2,3]",
        output: "3",
      },
    ],
    constraints: ["1 <= nums.length <= 5 * 10^4"],
    starterCode: {
      js: "function majorityElement(nums) {}",
      python: "def majorityElement(nums):\n    pass",
      java: "class Solution { public int majorityElement(int[] nums) { return 0; }}",
    },
    expectedOutput: "3",
  },

  "contains-duplicate": {
    id: "contains-duplicate",
    title: "Contains Duplicate",
    difficulty: "Easy",
    category: "Array • Hash Set",
    description: {
      text: "Determine if the array contains any duplicates.",
    },
    examples: [
      {
        input: "nums = [1,2,3,1]",
        output: "true",
      },
    ],
    constraints: ["1 <= nums.length <= 10^5"],
    starterCode: {
      js: "function containsDuplicate(nums) {}",
      python: "def containsDuplicate(nums):\n    pass",
      java: "class Solution { public boolean containsDuplicate(int[] nums) { return false; }}",
    },
    expectedOutput: "true",
  },

  //

  "valid-sudoku": {
    id: "valid-sudoku",
    title: "Valid Sudoku",
    difficulty: "Medium",
    category: "Matrix • Hash Table",
    description: {
      text: "Check if a 9x9 Sudoku board is valid.",
    },
    examples: [
      {
        input: "board = [...9x9 grid]",
        output: "true",
      },
    ],
    constraints: ["Board size: 9x9", "Digits or '.'"],
    starterCode: {
      js: "function isValidSudoku(board) {}",
      python: "def isValidSudoku(board):\n    pass",
      java: "class Solution { public boolean isValidSudoku(char[][] board) { return false; }}",
    },
    expectedOutput: "true",
  },

  "rotate-image": {
    id: "rotate-image",
    title: "Rotate Image",
    difficulty: "Medium",
    category: "Matrix • Simulation",
    description: {
      text: "Rotate the n x n matrix by 90 degrees in-place.",
    },
    examples: [
      {
        input: "[[1,2,3],[4,5,6],[7,8,9]]",
        output: "[[7,4,1],[8,5,2],[9,6,3]]",
      },
    ],
    constraints: ["n == matrix.length == matrix[i].length", "1 <= n <= 20"],
    starterCode: {
      js: "function rotate(matrix) {}",
      python: "def rotate(matrix):\n    pass",
      java: "class Solution { public void rotate(int[][] matrix) {} }",
    },
    expectedOutput: "[[7,4,1],[8,5,2],[9,6,3]]",
  },

  "insert-interval": {
    id: "insert-interval",
    title: "Insert Interval",
    difficulty: "Medium",
    category: "Intervals • Sorting",
    description: {
      text: "Insert a new interval into a list of non-overlapping intervals.",
    },
    examples: [
      {
        input: "intervals = [[1,3],[6,9]], newInterval = [2,5]",
        output: "[[1,5],[6,9]]",
      },
    ],
    constraints: ["1 <= intervals.length <= 10^4"],
    starterCode: {
      js: "function insert(intervals, newInterval) {}",
      python: "def insert(intervals, newInterval):\n    pass",
      java: "class Solution { public int[][] insert(int[][] intervals, int[] newInterval) { return null; }}",
    },
    expectedOutput: "[[1,5],[6,9]]",
  },

  "3sum": {
    id: "3sum",
    title: "3Sum",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: {
      text: "Given an integer array nums, return all unique triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.",
      notes: ["The solution set must not contain duplicate triplets."],
    },
    examples: [
      {
        input: "nums = [-1,0,1,2,-1,-4]",
        output: "[[-1,-1,2],[-1,0,1]]",
        explanation: "",
      },
      {
        input: "nums = [0,1,1]",
        output: "[]",
        explanation: "",
      },
      {
        input: "nums = [0,0,0]",
        output: "[[0,0,0]]",
        explanation: "",
      },
    ],
    constraints: ["3 ≤ nums.length ≤ 10⁵", "-10⁵ ≤ nums[i] ≤ 10⁵"],
    starterCode: {
      javascript: `function threeSum(nums) {
  // Write your solution here
  
}

// Test cases
console.log(threeSum([-1,0,1,2,-1,-4])); // Expected: [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0,1,1])); // Expected: []
console.log(threeSum([0,0,0])); // Expected: [[0,0,0]]`,
      python: `def threeSum(nums):
    # Write your solution here
    pass

# Test cases
print(threeSum([-1,0,1,2,-1,-4]))  # Expected: [[-1,-1,2],[-1,0,1]]
print(threeSum([0,1,1]))  # Expected: []
print(threeSum([0,0,0]))  # Expected: [[0,0,0]]`,
      java: `import java.util.*;

class Solution {
    public static List<List<Integer>> threeSum(int[] nums) {
        // Write your solution here
        
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        System.out.println(threeSum(new int[]{-1,0,1,2,-1,-4})); // Expected: [[-1,-1,2],[-1,0,1]]
        System.out.println(threeSum(new int[]{0,1,1})); // Expected: []
        System.out.println(threeSum(new int[]{0,0,0})); // Expected: [[0,0,0]]
    }
}`,
    },
    expectedOutput: {
      javascript: "[[-1,-1,2],[-1,0,1]]\n[]\n[[0,0,0]]",
      python: "[[-1,-1,2],[-1,0,1]]\n[]\n[[0,0,0]]",
      java: "[[-1,-1,2],[-1,0,1]]\n[]\n[[0,0,0]]",
    },
  },

  "group-anagrams": {
    id: "group-anagrams",
    title: "Group Anagrams",
    difficulty: "Medium",
    category: "Array • Hash Table • String",
    description: {
      text: "Given an array of strings strs, group the anagrams together.",
      notes: ["You can return the answer in any order."],
    },
    examples: [
      {
        input: 'strs = ["eat","tea","tan","ate","nat","bat"]',
        output: '[["bat"],["nat","tan"],["eat","tea","ate"]]',
      },
      {
        input: 'strs = [""]',
        output: '[[""]]',
      },
      {
        input: 'strs = ["a"]',
        output: '[["a"]]',
      },
    ],
    constraints: [
      "1 ≤ strs.length ≤ 10⁴",
      "0 ≤ strs[i].length ≤ 100",
      "strs[i] consists of lowercase English letters.",
    ],
    starterCode: {
      javascript: `function groupAnagrams(strs) {
  // Write your solution here
}

// Test cases
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"])); // Expected: [["bat"],["nat","tan"],["eat","tea","ate"]]
console.log(groupAnagrams([""])); // Expected: [[""]]
console.log(groupAnagrams(["a"])); // Expected: [["a"]]`,
      python: `def groupAnagrams(strs):
    # Write your solution here
    pass

# Test cases
print(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))  # Expected: [["bat"],["nat","tan"],["eat","tea","ate"]]
print(groupAnagrams([""]))  # Expected: [[""]]
print(groupAnagrams(["a"]))  # Expected: [["a"]]`,
      java: `import java.util.*;

class Solution {
    public static List<List<String>> groupAnagrams(String[] strs) {
        // Write your solution here
        
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        System.out.println(groupAnagrams(new String[]{"eat","tea","tan","ate","nat","bat"})); // Expected: [["bat"],["nat","tan"],["eat","tea","ate"]]
        System.out.println(groupAnagrams(new String[]{""})); // Expected: [[""]]
        System.out.println(groupAnagrams(new String[]{"a"})); // Expected: [["a"]]
    }
}`,
    },
    expectedOutput: {
      javascript:
        '[["bat"],["nat","tan"],["eat","tea","ate"]]\n[[""]]\n[["a"]]',
      python: '[["bat"],["nat","tan"],["eat","tea","ate"]]\n[[""]]\n[["a"]]',
      java: '[["bat"],["nat","tan"],["eat","tea","ate"]]\n[[""]]\n[["a"]]',
    },
  },

  //

  "longest-increasing-subsequence": {
    id: "longest-increasing-subsequence",
    title: "Longest Increasing Subsequence",
    difficulty: "Medium",
    category: "Dynamic Programming • Binary Search",
    description: {
      text: "Return the length of the longest strictly increasing subsequence.",
    },
    examples: [{ input: "nums = [10,9,2,5,3,7,101,18]", output: "4" }],
    constraints: ["1 <= nums.length <= 2500"],
    starterCode: {
      js: "function lengthOfLIS(nums) {}",
      python: "def lengthOfLIS(nums):\n    pass",
      java: "class Solution { public int lengthOfLIS(int[] nums) { return 0; }}",
    },
    expectedOutput: "4",
  },

  "clone-graph": {
    id: "clone-graph",
    title: "Clone Graph",
    difficulty: "Medium",
    category: "Graph • DFS",
    description: {
      text: "Clone an undirected graph.",
      notes: [],
    },
    examples: [
      {
        input: "adjList = [[2,4],[1,3],[2,4],[1,3]]",
        output: "Cloned graph adjacency list",
        explanation: "",
      },
    ],
    constraints: ["1 ≤ number of nodes ≤ 100"],
    starterCode: {
      javascript: `function cloneGraph(node) {
  // Write your solution here
  
}

// No direct test cases because graph nodes can't be easily printed`,
      python: `def cloneGraph(node):
    # Write your solution here
    pass

# No direct test cases`,
      java: `class Solution {
    public Node cloneGraph(Node node) {
        // Write your solution here
        
        return null;
    }
}`,
    },
    expectedOutput: {
      javascript: "...cloned graph...",
      python: "...cloned graph...",
      java: "...cloned graph...",
    },
  },

  "course-schedule": {
    id: "course-schedule",
    title: "Course Schedule",
    difficulty: "Medium",
    category: "Graph • Topological Sort",
    description: {
      text: "Return true if you can finish all courses.",
      notes: [],
    },
    examples: [
      {
        input: "numCourses = 2, prerequisites = [[1,0]]",
        output: "true",
        explanation: "",
      },
    ],
    constraints: ["1 ≤ numCourses ≤ 10^5"],
    starterCode: {
      javascript: `function canFinish(numCourses, prerequisites) {
  // Write your solution here
  
}

// Example:
// console.log(canFinish(2, [[1,0]])); // Expected: true`,

      python: `def canFinish(numCourses, prerequisites):
    # Write your solution here
    pass

# Example:
# print(canFinish(2, [[1,0]]))  # Expected: True`,

      java: `class Solution {
    public boolean canFinish(int numCourses, int[][] prerequisites) {
        // Write your solution here
        
        return false;
    }

    public static void main(String[] args) {
        // Example: numCourses=2, prerequisites=[[1,0]]
        // Expected: true
    }
}`,
    },
    expectedOutput: {
      javascript: "true",
      python: "true",
      java: "true",
    },
  },

  "implement-trie": {
    id: "implement-trie",
    title: "Implement Trie (Prefix Tree)",
    difficulty: "Medium",
    category: "Trie • String",
    description: {
      text: "Implement insert, search, and startsWith.",
      notes: [],
    },
    examples: [
      {
        input: "insert('apple'), search('apple')",
        output: "true",
        explanation: "",
      },
    ],
    constraints: ["All words are lowercase"],
    starterCode: {
      javascript: `class Trie {
  constructor() {
    // Initialize your data structure here
  }

  insert(word) {
    // Write your solution here
  }

  search(word) {
    // Write your solution here
  }

  startsWith(prefix) {
    // Write your solution here
  }
}

// Example usage:
// const trie = new Trie();
// trie.insert("apple");
// console.log(trie.search("apple")); // Expected: true`,

      python: `class Trie:
    def __init__(self):
        # Initialize your data structure here
        pass

    def insert(self, word):
        # Write your solution here
        pass

    def search(self, word):
        # Write your solution here
        pass

    def startsWith(self, prefix):
        # Write your solution here
        pass

# Example:
# trie = Trie()
# trie.insert("apple")
# print(trie.search("apple"))  # Expected: True`,

      java: `class Trie {
    public Trie() {
        // Initialize your data structure here
    }

    public void insert(String word) {
        // Write your solution here
    }

    public boolean search(String word) {
        // Write your solution here
        return false;
    }

    public boolean startsWith(String prefix) {
        // Write your solution here
        return false;
    }
}`,
    },
    expectedOutput: {
      javascript: "true",
      python: "true",
      java: "true",
    },
  },

  "top-k-frequent-elements": {
    id: "top-k-frequent-elements",
    title: "Top K Frequent Elements",
    difficulty: "Medium",
    category: "Array • Heap",
    description: {
      text: "Return the k most frequent elements.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [1,1,1,2,2,3], k = 2",
        output: "[1,2]",
        explanation: "",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 10^5"],
    starterCode: {
      javascript: `function topKFrequent(nums, k) {
  // Write your solution here
  
}

// Example:
console.log(topKFrequent([1,1,1,2,2,3], 2)); // Expected: [1, 2]`,

      python: `def topKFrequent(nums, k):
    # Write your solution here
    pass

# Example:
# print(topKFrequent([1,1,1,2,2,3], 2))  # Expected: [1, 2]`,

      java: `class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        // Write your solution here
        
        return new int[0];
    }

    public static void main(String[] args) {
        // Example input: [1,1,1,2,2,3], k=2
        // Expected output: [1,2]
    }
}`,
    },
    expectedOutput: {
      javascript: "[1,2]",
      python: "[1, 2]",
      java: "[1, 2]",
    },
  },

  "kth-largest-element-in-array": {
    id: "kth-largest-element-in-array",
    title: "Kth Largest Element in an Array",
    difficulty: "Medium",
    category: "Array • Heap",
    description: {
      text: "Return the k-th largest element in the array.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [3,2,1,5,6,4], k = 2",
        output: "5",
        explanation: "",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 10^5"],
    starterCode: {
      javascript: `function findKthLargest(nums, k) {
  // Write your solution here
  
}

// Example:
console.log(findKthLargest([3,2,1,5,6,4], 2)); // Expected: 5`,

      python: `def findKthLargest(nums, k):
    # Write your solution here
    pass

# Example:
# print(findKthLargest([3,2,1,5,6,4], 2))  # Expected: 5`,

      java: `class Solution {
    public int findKthLargest(int[] nums, int k) {
        // Write your solution here
        
        return 0;
    }

    public static void main(String[] args) {
        // Example: nums=[3,2,1,5,6,4], k=2
        // Expected output: 5
    }
}`,
    },
    expectedOutput: {
      javascript: "5",
      python: "5",
      java: "5",
    },
  },

  "number-of-islands": {
    id: "number-of-islands",
    title: "Number of Islands",
    difficulty: "Medium",
    category: "Matrix • DFS / BFS",
    description: {
      text: "Count the number of islands in a grid.",
      notes: [],
    },
    examples: [
      {
        input: "grid = [['1','1','1'],['0','1','0'],['1','1','1']]",
        output: "1",
        explanation: "",
      },
    ],
    constraints: ["1 ≤ grid size ≤ 300"],
    starterCode: {
      javascript: `function numIslands(grid) {
  // Write your solution here
  
}

// Example:
console.log(numIslands([
  ['1','1','1'],
  ['0','1','0'],
  ['1','1','1']
])); // Expected: 1`,

      python: `def numIslands(grid):
    # Write your solution here
    pass

# Example:
# print(numIslands([
#   ['1','1','1'],
#   ['0','1','0'],
#   ['1','1','1']
# ]))  # Expected: 1`,

      java: `class Solution {
    public int numIslands(char[][] grid) {
        // Write your solution here
        
        return 0;
    }

    public static void main(String[] args) {
        // Example:
        // Expected: 1
    }
}`,
    },
    expectedOutput: {
      javascript: "1",
      python: "1",
      java: "1",
    },
  },

  "binary-tree-level-order-traversal": {
    id: "binary-tree-level-order-traversal",
    title: "Binary Tree Level Order Traversal",
    difficulty: "Medium",
    category: "Tree • BFS",
    description: {
      text: "Return the level order traversal of a binary tree.",
      notes: [],
    },
    examples: [
      {
        input: "root = [3,9,20,null,null,15,7]",
        output: "[[3],[9,20],[15,7]]",
        explanation: "",
      },
    ],
    constraints: ["Total nodes ≤ 10⁴"],
    starterCode: {
      javascript: `function levelOrder(root) {
  // Write your solution here
  
}

// Example
// Input: [3,9,20,null,null,15,7]
// Expected: [[3],[9,20],[15,7]]`,

      python: `def levelOrder(root):
    # Write your solution here
    pass

# Example:
# Input: [3,9,20,null,null,15,7]
# Expected: [[3],[9,20],[15,7]]`,

      java: `import java.util.*;

class Solution {
    public List<List<Integer>> levelOrder(TreeNode root) {
        // Write your solution here
        
        return new ArrayList<>();
    }
    
    public static void main(String[] args) {
        // Example:
        // Input: [3,9,20,null,null,15,7]
        // Expected: [[3],[9,20],[15,7]]
    }
}`,
    },
    expectedOutput: {
      javascript: "[[3],[9,20],[15,7]]",
      python: "[[3],[9,20],[15,7]]",
      java: "[[3],[9,20],[15,7]]",
    },
  },

  "construct-binary-tree-from-preorder-inorder": {
    id: "construct-binary-tree-from-preorder-inorder",
    title: "Construct Binary Tree from Preorder and Inorder Traversal",
    difficulty: "Medium",
    category: "Tree • Recursion",
    description: {
      text: "Build a binary tree from preorder and inorder traversal arrays.",
    },
    examples: [
      {
        input: "preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]",
        output: "Tree structure",
      },
    ],
    constraints: ["1 <= number of nodes <= 3000"],
    starterCode: {
      js: `function buildTree(preorder, inorder) {
  // write code here
}`,
      python: `def buildTree(preorder, inorder):
    # write code here
    pass`,
      java: `class Solution {
    public TreeNode buildTree(int[] preorder, int[] inorder) {
        // write code here
        return null;
    }
}`,
    },
    expectedOutput: "binary tree",
  },

  //
};

//languages
export const LANGUAGE_CONFIG = {
  javascript: {
    name: "JavaScript",
    icon: "/javascript.png",
    monacoLang: "javascript",
  },
  python: {
    name: "Python",
    icon: "/python.png",
    monacoLang: "python",
  },
  java: {
    name: "Java",
    icon: "/java.png",
    monacoLang: "java",
  },
};
