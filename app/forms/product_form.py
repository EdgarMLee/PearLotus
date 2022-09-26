from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField, FloatField, DateTimeField
from wtforms.validators import DataRequired, NumberRange, Length

class ProductForm(FlaskForm):
  owner_id = IntegerField("owner_id", validators=[DataRequired()])
  name = StringField("name", validators=[DataRequired()])
  category = StringField("category", validators=[DataRequired()])
  price = FloatField("price", validators=[DataRequired(), NumberRange(1, 100)])
  description = StringField("description", validators=[DataRequired(), Length(1, 255)])
  createdAt = DateTimeField("createdAt", validators=[DataRequired()])
  updatedAt = DateTimeField("updatedAt", validators=[DataRequired()])
  submit = SubmitField("submit")
