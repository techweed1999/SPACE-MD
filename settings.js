require('dotenv').config();

module.exports = {
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAPGKzlq2UGV3iAQAAI0HAAAKAAAAY3JlZHMuanNvbpVUy46jRhT9lai2tsa8*ACppQHaDwzG2G78imZRhgLKYMBVhbEZWZqPyCaLLLKJIrWynf+Z7XxFhLt7ehbJpMPqcqt07rn3nFsfQZphikx0AcpHkBN8ggzVIbvkCChAK4IAEdAEPmQQKGAyknabDUvGghB0iqhEre5iFccPQjKdtMbL1jjQj5ozpWxZ3oFrE+TFLsHeDwAXE7gW7GwbIXEeE54rc7lhBMTq9nr7o3jmjZHglKeh5mP1DlxrRIgJTsN+HqEDIjAx0cWBmLyNvmFvpwOOlm4onF1KGbrf90+yaVn2QpgOvEpK9b7Wk*RI9N5G3zZ7*b7oFTQ9p*dFXmlu4DWOeYH2i0qcm2O0SjQnM80ifqZPcZgi3*BRyjC7vHnu2UiTHKtoROupNko6qteozE5jIB7nPWoJ+6WwPqbrvMehkfQ24mG7YbkmasidZTJTJSOFlov0WHuI3dYAJW1husebnIvXWvY9cYe8eCX+P3OHDslnDewMyREP5aU6SfrmONqc25P5AHGT81LMffe0aGuH2dvoV3o8rlrj6W6y8EcTZ9sID3pLddZLsy+gos*3GgPDn6eny1x6pQ9ZQX7EcmSs5L7N3+9CqK6qxXHp2tOpqY5jyZXlqdhO88nG0u1zepCjraBFO2ui48Qeut3ugTt5dm6n5BzLO0HKtPW4y6nyRI*Ku1tHMboYPlD4axMQFGLKCGQ4S285TmoC6J8WyCOI3cYLVOM+bUdydLkfts+Vg2aWmJf23M10VLbDxEl3uF0dEDvK3h1ogpxkHqIU+SNMWUYuE0QpDBEFys8fmiBFZ*YkXF1O5JsgwIQyNy3yJIP+i6ovh9DzsiJli0vq6XWACFC41zRiDKchredYpJB4ET4hPYKMAiWACUXfOkQE+UBhpEDftlbP*Hrwa8HsCJYmgyY43ATBPlBAm5Olnsh3JFFWOu*pu7IGhXn+LkUMNEEK67vgy1+*fn389PXx05c*fvnpy++f6+jPz18ffwNNkNxweIHv8b1uh5cEridJSud9nb9+66Au6CMGcUKBAnQzULvTzag*dkJGjeFQ7YeqHqrgteMX6zxJk3ujc7hZCqU28E6b1UYQuyZLsm1CtF3rvms6+x2XOtP5wyy++wcQoIDY57dDQ91ny7RwjmjctztzvLm0acypuFq3YKyVp84wyGgyHqx1e1keUXBAtkUT98w3hAV9CK2OG823ZlXuJsxsH6eqeldX89EJe+j7YsNs3pmb+2V4imfMScRTf1hJVbJoiQezmE0HKV7ohUszMtySQD6epAWsqECKnpS1tuq+Ea1CdzfP74szPzo7YrIxVuv97MnUt6VKnh8zfLNbrWX9G2B0exueVfsPbZ9o1wbkrs3vEJ7fmn*ZVw2utd5mOPCpOl9bwuBgs8aFbOFwC8tVq2xc9pIgj6sqdrkxuF4*NEGeQBZk5AAUQA87CJqAZEVtZyMNsh9U0lXO0J6bTiBl6uuKPOADogwecqDwXUmWa*NJT7cckuUjSCOgAMHhN1FQ+*2i5vmCQfaycUCtP+NigevfUEsBAhQDFAAACAgA8YrOWrZQZXeIBAAAjQcAAAoAAAAAAAAAAAAAAKSBAAAAAGNyZWRzLmpzb25QSwUGAAAAAAEAAQA4AAAAsAQAAAAA',
  BOT_ADMIN: process.env.BOT_ADMIN || '50948316439',
  PORT: parseInt(process.env.PORT) || 20087,
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'techweed1999,
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  
  //⚠️ Premium users settings ⚠️
  PREMIUM_KEY: process.env.PREMIUM_KEY || '',
  MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
  EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
//Need premium? Purchase one here => https://wa.me/tylor
