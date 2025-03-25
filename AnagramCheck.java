import java.util.Arrays;
import java.util.Scanner;

public class AnagramCheck {
    public static boolean isAnagram(String str1, String str2) {
        // Convert strings to lowercase to make it case insensitive
        str1 = str1.toLowerCase();
        str2 = str2.toLowerCase();

        // Check if lengths are different, if yes, they can't be anagrams
        if (str1.length() != str2.length()) {
            return false;
        }

        // Convert strings to character arrays and sort them
        char[] charArray1 = str1.toCharArray();
        char[] charArray2 = str2.toCharArray();
        Arrays.sort(charArray1);
        Arrays.sort(charArray2);

        // Compare sorted arrays
        return Arrays.equals(charArray1, charArray2);
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Taking input from user
        System.out.print("Enter first string: ");
        String word1 = scanner.nextLine();

        System.out.print("Enter second string: ");
        String word2 = scanner.nextLine();

        // Checking if they are anagrams
        if (isAnagram(word1, word2)) {
            System.out.println("Output: true (They are anagrams)");
        } else {
            System.out.println("Output: false (They are NOT anagrams)");
        }

        scanner.close();
    }
}
