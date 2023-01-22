// navigation.d.ts
// for useNavigation hook
import { StackParamList } from "./routes/AppRoutes";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends StackParamList {}
  }
}
