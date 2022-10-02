from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField, FloatField, SelectField, DateTimeField
from wtforms.validators import DataRequired, NumberRange, Length, Optional

class ProductForm(FlaskForm):
  owner_id = IntegerField("owner_id", validators=[DataRequired()])
  name = StringField("name", validators=[DataRequired()])
  category = SelectField("category", validators=[DataRequired(), Optional()])
  price = FloatField("price", validators=[DataRequired(), NumberRange(1, 100)])
  shortdescript = StringField("shortdescript", validators=[DataRequired(), Length(1, 100)])
  description = StringField("description", validators=[DataRequired(), Length(1, 255)])
  # createdAt = DateTimeField("createdAt", validators=[DataRequired()])
  # updatedAt = DateTimeField("updatedAt", validators=[DataRequired()])
  submit = SubmitField("submit")
