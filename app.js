import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const FlashcardApp = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);

  const words = [
    { english: 'apple', swedish: 'äpple' },
    { english: 'ball', swedish: 'boll' },
    // Add more words here
  ];

  const handleNextCard = () => {
    setShowTranslation(false);
    setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
  };

  const handleToggleTranslation = () => {
    setShowTranslation((prevShowTranslation) => !prevShowTranslation);
  };

  const currentWord = words[currentWordIndex];

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.card}
        onPress={handleToggleTranslation}
      >
        <Text style={styles.word}>
          {showTranslation ? currentWord.swedish : currentWord.english}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleNextCard}>
        <Text style={styles.buttonText}>Next Card</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  word: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FlashcardApp;
