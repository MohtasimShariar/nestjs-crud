import {Prop,Schema,SchemaFactory} from '@nestjs/mongoose'; 
import { HydratedDocument } from 'mongoose';
export type UserDocument = HydratedDocument<User>; //eita dara ashole type toiro hoi and database a model er kaj kore. 
@Schema() 
export class User { 
    @Prop({required: true})
    name: string; 
    @Prop({required: true})
    email: string; 
    @Prop({type: [String],maxlength: 3})
    hobbies: string[]; 
}

export const UserSchema = SchemaFactory.createForClass(User); //protita datar jonne type toiri kore class type
// class User { 
//     name: string; 
//     email: string; 
//     hobbies: string[]
// }

/**
 * import mongoose from mongoose; 
 * const userSchema = new mongoose.Schema({
 *  name: String;
 * torBaperName: String; 
 * 
 * })
 * const User = mongoose.Model('User',userSchema);
 */