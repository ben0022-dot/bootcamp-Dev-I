from pydoc import text
import string
import re


class Text:
    def __init__(self, text):
        self.text = text

    def word_frequency(self, word):
        words = self.text.split()
        count = words.count(word)
        return count if count > 0 else None

    def most_common_word(self):
        words = self.text.split()
        freq = {}

        for word in words:
            freq[word] = freq.get(word, 0) + 1

        # Find the word with the highest frequency
        most_common = max(freq, key=freq.get)
        return most_common

    def unique_words(self):
        words = self.text.split()
        unique = list(set(words))
        return unique

    @classmethod
    def from_file(cls, file_path):
        with open(file_path, 'r') as file:
            content = file.read()
        return cls(content)


class TextModification(Text):

    def remove_punctuation(self):
        translator = str.maketrans('', '', string.punctuation)
        return self.text.translate(translator)

    def remove_stop_words(self):
        stop_words = {
            'a', 'an', 'the', 'is', 'are', 'in', 'on', 'at', 'for',
            'to', 'of', 'and', 'or', 'but', 'if', 'then', 'with',
            'as', 'by', 'this', 'that', 'these', 'those'
        }

        words = self.text.split()
        filtered = [word for word in words if word.lower() not in stop_words]
        return ' '.join(filtered)

    def remove_special_characters(self):
        # Keep only letters, numbers, and spaces
        return re.sub(r'[^A-Za-z0-9\s]', '', self.text)
    text = Text("hello world hello python world world")
print(text.word_frequency("world"))   # 3
print(text.most_common_word())        # world
print(text.unique_words())            # ['hello', 'world', 'python']


# From file
file_text = Text.from_file("sample.txt")
print(file_text.most_common_word())


# Text modification
mod = TextModification("Hello!!! This is, a test text.")

print(mod.remove_punctuation())
# Hello This is a test text

print(mod.remove_stop_words())
# Hello!!! test text.

print(mod.remove_special_characters())
# Hello This is a test text