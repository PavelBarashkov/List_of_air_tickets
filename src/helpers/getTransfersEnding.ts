export const getTransfersEnding = (transfers: number): string => {
    if (transfers === 0) {
      return "пересадок";
    } else if (transfers === 1) {
      return "пересадка";
    } else if (transfers >= 2 && transfers <= 4) {
      return "пересадки";
    } else {
      return "пересадок";
    }
  };
  