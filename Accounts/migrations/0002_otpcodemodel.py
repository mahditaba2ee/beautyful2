# Generated by Django 4.1.4 on 2022-12-08 22:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Accounts', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='OtpCodeModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('phone', models.CharField(max_length=13)),
                ('code', models.IntegerField(null=True)),
                ('created', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
