from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField, FloatField, SelectField, DateTimeField
from wtforms.validators import DataRequired, NumberRange, Length, Optional, URL

class ProductForm(FlaskForm):
  owner_id = IntegerField("owner_id", validators=[DataRequired()])
  name = StringField("name", validators=[DataRequired()])
  category = SelectField("category", validators=[DataRequired(), Optional()])
  price = FloatField("price", validators=[DataRequired(), NumberRange(1, 500)])
  shortdescript = StringField("shortdescript", validators=[DataRequired(), Length(1, 500)])
  description = StringField("description", validators=[DataRequired(), Length(1, 1000)])
  # image = StringField("image", validators=[URL(), Optional()])
  
  # createdAt = DateTimeField("createdAt", validators=[DataRequired()])
  # updatedAt = DateTimeField("updatedAt", validators=[DataRequired()])
  submit = SubmitField("submit")
