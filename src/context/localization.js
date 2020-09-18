import React, { Component, createContext } from "react";
import en from "../db/db_en.json";
import ru from "../db/db_ru.json";
import ua from "../db/db_ua.json";

const locales = { en, ru, ua };

const { Provider, Consumer } = createContext({
  currentLocale: "en",
  localizedContent: locales.en,
  locales: Object.keys(locales),
  changeLocale: () => null,
});

class LocalizationContent extends Component {
  static Consumer = Consumer;

  changeLocale = (locale) => {
    this.setState({
      currentLocale: locale,
      localizedContent: locales[locale],
    });
  };

  state = {
    currentLocale: "en",
    localizedContent: locales.en,
    locales: Object.keys(locales),
    changeLocale: this.changeLocale,
  };

  render() {
    const { children } = this.props;
    return <Provider value={this.state}>{children}</Provider>;
  }
}

export default LocalizationContent;
