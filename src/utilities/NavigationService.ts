import {
  CommonActions,
  NavigationContainerRef,
  RouteProp,
} from '@react-navigation/native';
import {SCREENS_ENUM, STACKS_ENUM} from 'src/enums';

let _navigator: NavigationContainerRef<any> | null = null;

function setTopLevelNavigator(
  navigatorRef: NavigationContainerRef<any> | null,
): void {
  _navigator = navigatorRef;
}

function navigate(
  routeName: STACKS_ENUM | SCREENS_ENUM,
  params?: object | undefined,
): void {
  _navigator?.dispatch(
    CommonActions.navigate({
      name: routeName,
      params: params,
    }),
  );
}

function nestedNavigate(
  routeName: STACKS_ENUM,
  subRoute: SCREENS_ENUM,
  params?: object | undefined,
): void {
  _navigator?.dispatch(
    CommonActions.navigate({
      name: routeName,
      params: {
        screen: subRoute,
        params,
      },
    }),
  );
}

function reset(routeName: STACKS_ENUM | SCREENS_ENUM): void {
  _navigator?.dispatch(
    CommonActions.reset({
      index: 1,
      routes: [
        {
          name: routeName,
        },
        // { name: 'Home' },
      ],
    }),
  );
}

function goBack(): void {
  _navigator?.dispatch(CommonActions.goBack());
}

function setParams<T extends Record<string, any>>(
  params:
    | Partial<RouteProp<Record<string, any>, string>>
    | ((prevParams: T) => T),
): void {
  _navigator?.dispatch(CommonActions.setParams(params));
}

export default {
  navigate,
  setTopLevelNavigator,
  reset,
  goBack,
  setParams,
  nestedNavigate,
};
