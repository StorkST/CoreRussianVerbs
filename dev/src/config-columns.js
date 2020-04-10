import React from "react";
import classnames from "classnames";

const configColumns =
[
  {
    "name": "Ранг",
    "options": {
      "filter": true,
      setCellHeaderProps: (value) =>
        (
          {
            style: {
              'paddingRight': '0px'
            }
          }
        ),
      "hint": "Frequency rank in the Russian language (A Frequency Dictionary of Contemporary RussianCore Vocabulary for Learners, 2013). Rank is 10000 when a verb is an aspect pair not originally in the Frequency Dictionary.",
      "filterOptions": {
        "names": ["1 - 9 000", "10 000"],
        logic(rank, filters) {
          const show =
            (filters.indexOf("1 - 9 000") >= 0 && rank <= 9000) ||
            (filters.indexOf("10 000") >= 0 && rank == 10000);
          return !show;
        },
      }
    }
  },
  {
    "name": "Уровень",
    "options": {
      "filter": true,
      setCellHeaderProps: (value) =>
        (
          {
            style: {
              'paddingRight': '0px'
            }
          }
        ),
      }
  },
  {
    "name": "По-английски",
    "options": {
      "filter": false
    }
  },
  {
    "name": "По-французски",
    "options": {
      "filter": false
    }
  },
  {
    "name": "Инфинитив",
    "options": {
      "filter": false
    }
  },
  {
    "name": "Разговорный",
    "options": {
      "filter": true,
      "display": "false",
      "hint": "Colloquial"
    }
  },
  {
    "name": "Неправильный",
    "options": {
      "filter": true,
    }
  },
  {
    "name": "Группа",
    "options": {
      "filter": true,
      "display": "false"
    }
  },
  {
    "name": "Суффикс спряжения",
    "options": {
      "filter": true,
      "display": "false",
      "hint": "Suffixes of different conjugation classes (from http://russian.cornell.edu/verbs/conjTables.htm)"
    }
  },
  {
    "name": "Совершенный вид",
    "options": {
      "filter": true
    }
  },
  {
    "name": "Пара аспектов",
    "options": {
      "filter": false
    }
  },
  {
    "name": "Возвратный",
    "options": {
      "filter": true,
      "display": "false"
    }
  },
  {
    "name": "Движение",
    "options": {
      "filter": true,
      "display": "false"
    }
  },
  {
    "name": "Я",
    "options": {
      "filter": false
    }
  },
  {
    "name": "Ты",
    "options": {
      "filter": false
    }
  },
  {
    "name": "Он/Она/Оно",
    "options": {
      "filter": false
    }
  },
  {
    "name": "Мы",
    "options": {
      "filter": false
    }
  },
  {
    "name": "Вы",
    "options": {
      "filter": false
    }
  },
  {
    "name": "Они",
    "options": {
      "filter": false
    }
  },
  {
    "name": "Повелительное накл. 1",
    "options": {
      "filter": false,
      "display": "true"
    }
  },
  {
    "name": "Повелительное накл. 2",
    "options": {
      "filter": false,
      "display": "false"
    }
  },
  {
    "name": "Деепричастие Наст. время",
    "options": {
      "filter": false,
      "display": "false"
    }
  },
  {
    "name": "Деепричастие Прош. время",
    "options": {
      "filter": false,
      "display": "false"
    }
  },
  {
    "name": "Действит. причастие Наст. время",
    "options": {
      "filter": false,
      "display": "false"
    }
  },
  {
    "name": "Действит. причастие Прош. время",
    "options": {
      "filter": false,
      "display": "false"
    }
  },
  {
    "name": "Страдат. причастие Наст. время",
    "options": {
      "filter": false,
      "display": "false"
    }
  },
  {
    "name": "Страдат. причастие Прош. время",
    "options": {
      "filter": false,
      "display": "false"
    }
  }
];

export
{
    configColumns
};
