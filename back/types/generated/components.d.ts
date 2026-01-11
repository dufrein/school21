import type { Schema, Struct } from '@strapi/strapi';

export interface AnswersAnswer extends Struct.ComponentSchema {
  collectionName: 'components_answers_answers';
  info: {
    displayName: 'Answer';
  };
  attributes: {
    isCorrect: Schema.Attribute.Boolean;
    text: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'answers.answer': AnswersAnswer;
    }
  }
}
