# Generated by Django 4.1.4 on 2022-12-09 15:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Category', '0011_delete_imagdeslidmodel'),
    ]

    operations = [
        migrations.CreateModel(
            name='ImagdeSlidModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='')),
                ('url', models.URLField()),
            ],
        ),
    ]