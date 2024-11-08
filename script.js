/* CSS for the fade-in animation and moving shadow effect */
#popup {
  animation: fadeIn 1s ease-out forwards, moveShadows 5s ease-in-out infinite;
}

/* Fade-in animation */
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

/* Moving shadows animation */
@keyframes moveShadows {
  0% {
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
  }
  25% {
    box-shadow: -10px -10px 20px rgba(0, 0, 0, 0.4);
  }
  50% {
    box-shadow: 10px -10px 20px rgba(0, 0, 0, 0.6);
  }
  75% {
    box-shadow: -10px 10px 20px rgba(0, 0, 0, 0.3);
  }
  100% {
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
  }
}

/* Optional: Add some smoothness for other transitions */
* {
  transition: all 0.3s ease;
}
