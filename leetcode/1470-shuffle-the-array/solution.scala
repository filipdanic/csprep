object Solution {
  def shuffle(nums: Array[Int], n: Int): Array[Int] = {
    val result: Array[Int] = new Array(2 * n)
    var j = n
    var x = 0
    var y = 1

    for (i <- 0 until n) {
      result(x) = nums(i)
      result(y) = nums(j)
      x += 2
      y += 2
      j += 1
    }

    result
  }
}
