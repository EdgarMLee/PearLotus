from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField, FloatField, SelectField, DateTimeField
from wtforms.validators import DataRequired, NumberRange, Length, Optional, URL

class ProductForm(FlaskForm):
  owner_id = IntegerField("owner_id", validators=[DataRequired()])
  name = StringField("name", validators=[DataRequired()])
  category = SelectField("category", validators=[DataRequired()])
  price = FloatField("price", validators=[DataRequired(), NumberRange(1,500)])
  shortdescript = StringField("shortdescript", validators=[DataRequired()])
  description = StringField("description", validators=[DataRequired()])
  submit = SubmitField("submit")
  # image = StringField("image", validators=[URL(), Optional()])
  # createdAt = DateTimeField("createdAt", validators=[DataRequired()])
  # updatedAt = DateTimeField("updatedAt", validators=[DataRequired()])
