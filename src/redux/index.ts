import configureStore from "./configureStore";

const { store, persistor } = configureStore();

export { persistor };

export default store;
