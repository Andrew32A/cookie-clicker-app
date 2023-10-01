import { createStore } from "redux";

const initialState = {
  cookies: 0,
  clicks: 0,
  totalUpgradesPurchased: 0,
  timePlayed: 0,
  upgrades: [
    { id: "1", name: "Auto Clicker", multiplier: 1, basePrice: 10, owned: 0 },
    { id: "2", name: "Grandma Baker", multiplier: 2, basePrice: 20, owned: 0 },
    {
      id: "3",
      name: "Cookie Factory",
      multiplier: 20,
      basePrice: 500,
      owned: 0,
    },
    // TODO: add more upgrades here
  ],
};

function cookieReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT_COOKIE":
      const incrementValue = state.upgrades.reduce(
        (total, upgrade) => total + upgrade.multiplier * upgrade.owned,
        1
      );
      return {
        ...state,
        cookies: state.cookies + incrementValue,
        clicks: state.clicks + 1,
      };
    case "PURCHASE_UPGRADE":
      const upgradeIndex = state.upgrades.findIndex(
        (up) => up.id === action.id
      );
      if (
        state.cookies >=
        state.upgrades[upgradeIndex].basePrice *
          (state.upgrades[upgradeIndex].owned + 1)
      ) {
        const newCookies =
          state.cookies -
          state.upgrades[upgradeIndex].basePrice *
            (state.upgrades[upgradeIndex].owned + 1);
        const newUpgrades = [...state.upgrades];
        newUpgrades[upgradeIndex].owned++;
        return {
          ...state,
          cookies: newCookies,
          upgrades: newUpgrades,
          totalUpgradesPurchased: state.totalUpgradesPurchased + 1,
        };
      }
      return state;
    case "INCREMENT_TIME":
      const cookiesPerSecond = state.upgrades.reduce(
        (total, upgrade) => total + upgrade.multiplier * upgrade.owned,
        0
      );

      return {
        ...state,
        cookies: state.cookies + cookiesPerSecond,
        timePlayed: state.timePlayed + 1,
      };
    default:
      return state;
  }
}

const store = createStore(cookieReducer);

export default store;
