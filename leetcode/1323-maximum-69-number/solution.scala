object Solution {
  def maximum69Number (n: Int): Int = {
    val digits = n.toString.toCharArray.map(_.toInt - 48)
    var i = 0
    var found = false
    while (i <= digits.length - 1 && !found) {
      if (digits(i) == 6) {
        digits(i) = 9
        found = true
      }
      i += 1
    }

    var num = 0
    var mul = 1
    for (i <- digits.length - 1 to 0 by -1) {
      num = num + digits(i) * mul
      mul = mul * 10
    }

    num
  }
}
