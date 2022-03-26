import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UserInput {
  @Field()
  id: number;

  @Field()
  name: string;
}
