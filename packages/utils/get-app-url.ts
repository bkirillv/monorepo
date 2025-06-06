export enum AppNames {
  main = "main",
  verona = "verona",
}

const getAppPortByName = (appName: AppNames) => {
  switch (appName) {
    case AppNames.main:
      return process.env.PORT_MAIN;
    case AppNames.verona:
      return process.env.PORT_VERONA;
  }
};

export const getAppUrl = (appName: AppNames) => {
  const isDev = process.env.NODE_ENV === "development";

  if (isDev) {
    return `http://localhost:${getAppPortByName(appName)}`;
  }

  return `https://${appName}.bushmanov.kz`;
};
