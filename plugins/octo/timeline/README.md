# **Octo Timeline**

Simple **OctoberCMS** plugin to write and display *Timeline* based events on Your website.

---

### **What is Timeline?**

This plugin provides a basic feature to display **DATE and TIME** (hence *Timeline*) **based posts**. It can be used as simple blog or news feature for your website, however the main concept is a very basic one user (site administrator) post display.

This plugin does not (and more likely will not) have comments feature - it is designed to only show posts.

Personally i use it on couple of my sites to display a progress of project.

### **Screenshot**
Please note: This is only example styling and is not included! It is down to You to set timeline to match Your website style.

![Example Screenshot](https://lh3.googleusercontent.com/-tF0Ke5SQJPY/WIIfJRDVlwI/AAAAAAAAE_Y/ss6bZi2Cl3gPH7QRdNNhhjReVML6CAd8wCLcB/s0/timeline.png "timeline.png")

### **Requirements**

The only requirement is to include plugin into your page in order to show timeline entries.

### **Adding component**

To display timeline entries, create a new page and simply add Timeline component to your page. It can be done either using backend pages management or programmatically. Example:

    title = "Timeline"
    url = "/timeline"
    layout = "default"

    [entries]
    ==
    Here goes the page markup.

### **Full page example**

Easily implement **{{ entry }}** Twig variables in your page to display timeline entry records. This is an example:
    

    title = "Timeline"
    url = "/timeline"
    layout = "default"
    
    [entries]
    ==
    {# Timeline variable #}
    {% set temp_date = '' %}

    <div class="container">
        <div class="page-header">
            <h2>Timeline <small>Entries</small></h2>
        </div>
        {% for entry in entries %}
            {# Comment:
                Matching dates in records for sorting in view
            #}
            {% set this_date = entry.date|date("Y-m-d") %}

            {# Comment:
                This groups dates and puts relevant records under date
            #}
            {% if this_date != temp_date %}
                {% set temp_date = this_date %}
                <center><h3>{{ entry.date|date('F jS, Y') }}</h3></center>
                <hr />
            {% endif %}

            {# Comment:
                Timeline Entry - Time & Title
            #}
            <p class="lead">
                <small><strong>{{ entry.time|date('H:i') }}</strong></small> &nbsp; {{ entry.title }}<br />
            </p>
            {# Comment:
                Timeline Entry - Text
            #}
            <p>
                {{ entry.text|raw }}
            </p>

            {# Comment:
                Puts HR for each entry except last
            #}
            {% if not loop.last %}<hr />{% endif %}
        {% endfor %}
    </div>

This will render Your timeline events as displayed in provided screenshot.

### **How it works**

The plugin component (*Entries.php*) gets ***public** entries from a database, sorts them by DATE in descending order (newest to oldest).

Frontend markup (HTML + Twig) renders entries while putting them under dates. **Example**:

Today  | |
------------- | -------------
|  | **[15:00]** I love October
|  | **[10:33]** Awesome weather!
|  | **[07:45]** Off to work

Yesterday  | |
------------- | -------------
|  | **[18:00]** Teatime?!
|  | **[12:30]** Hurray, the post!

#### What do i mean by **public** entries?

I have included a feature to set posts to public or private. If set public - posts will be displayed in Your timeline.
You will see a switch in the form while creating/editing post - this sets post status.

### **Twig markup explanation**

The **raw** code to do the job is simple few lines of [Twig](http://twig.sensiolabs.org/) code, which gets a loop, makes few variables and renders posts in above displayed order.

    {% set temp_date = '' %}
    
    {% for entry in entries %}
        {% set this_date = entry.date|date("Y-m-d") %}
    
        {% if this_date != temp_date %}
            {% set temp_date = this_date %}
            {{ entry.date|date('F jS, Y') }}
        {% endif %}
    
        {{ entry.time|date('H:i') }} - {{ entry.title }}
    
        {{ entry.text|raw }}
    
    {% endfor %}

#### **Now let me break it down for You.**

**First** we [set](http://twig.sensiolabs.org/doc/2.x/tags/set.html) a **temporary date** variable ***$temp_date*** to nothing (no value, or ***new***), which later will be used in loop to recognise if entry is in the same date or new date.

    {% set temp_date = '' %}

Now let's make a [loop](http://twig.sensiolabs.org/doc/2.x/tags/for.html) for entries.

    {% for entry in entries %}

The  important part is to set a new variable ***$this_date*** for [date](http://twig.sensiolabs.org/doc/2.x/filters/date.html) value and format so we can use in for entry (still referring to example above).

    {% set this_date = entry.date|date("Y-m-d") %}

Let's check if each **entry date** is still same using [if](http://twig.sensiolabs.org/doc/2.x/tags/if.html) statement. If it date is still same - entry in the loop will go under same date (remember the example?).

    {% if this_date != temp_date %}

Let's set temporary date variable to entry date variable for further checking if next entry date is still same.

    {% set temp_date = this_date %}

And let's show the date and desired format for entries

    {{ entry.date|date('F jS, Y') }}

Let's close if statement

    {% endif %}

#### Now here goes the entries for each date we have formatted just above.

Entry time and format:

    {{ entry.time|date('H:i') }}

Entry title:

    {{ entry.title }}

And entry text:

    {{ entry.text|raw }}

> What is this [|raw](http://twig.sensiolabs.org/doc/2.x/filters/raw.html) ? It's the twig filter to render value in "raw" format - usefull when you have HTML code in value (in our case is entry text). Without this filter we will see out entry html code:

>Hello, &lt;strong&gt;world&lt;/strong&gt;!

>With |raw we will see normal formatted text

>Hello, **world**! 

Oops! nearly forgot to close the loop. Let's do it.

    {% endfor %}

That's all! Very simple, yet clean code. Remember it is a raw code and it needs styling and html markup to display entries matching your website style.

### **Styling and Hacking**

I am certain that You do not need an explanation how to write HTML and CSS by now. So feel free to adapt the provided code to your needs.

### **Contributing**

Please feel free to send me Your concept ideas towards plugin and improvement suggestions for this plugin. I will gladly review them and implement where necessary.

**Major contributions and authors will be announced!**


### **MIT License**

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
