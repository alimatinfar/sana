# Generated by Django 2.2.3 on 2019-12-11 18:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('back', '0002_auto_20191211_1654'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='lat',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='lng',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
