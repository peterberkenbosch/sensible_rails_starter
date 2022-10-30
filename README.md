<div align="center" dir="auto">
  <h1>SensibleRails</h1>
<a target="_blank" rel="noopener noreferrer" href="https://github.com/davidteren/sensible_rails_starter"><img  width="480px" alt="Commit Stats" src="https://raw.githubusercontent.com/davidteren/sensible_rails_starter/48bd5aa6633b2c25ef1d2144d923d1072ac6cbeb/docs/images/rails-imageb.PNG" style="max-width: 50%;"></a>

<p>🚀 Focus on building stuff and not the setup. 🚀</p>
<br>
<hr>
</div>

<ol>
<li><a href="#whats-in-the-box">What's in the box</a></li>
<li><a href="#getting-started">Getting Started</a></li>
<li><a href="#using-overcommit">Using Overcommit</a></li>
<li><a href="#alternatives">Alternatives</a></li>
<li><a href="#contributions">Contributions</a></li>
</ol>


## What's in the box


- **SimpleTails** a [TailwindCSS prose](https://tailwindcss.com/docs/typography-plugin) implementation heavily inspired by [SimpleCSS](https://simplecss.org/).

- [ViteRuby](https://vite-ruby.netlify.app/) for lightning fast server starts, instant page update in development thanks to HMR nd much more

- [Anyway Config](https://github.com/palkan/anyway_config) to keep your Ruby configuration sane

---

## Getting Started

- Click the [**_Use this template_**](https://github.com/davidteren/sensible_rails_starter/generate) button to create a
  clone of this repo in your Github account.
- Once you've git cloned your repo to your computer, run the following;

```bash
cd <app_name>
./bin/respawn
```

Then run the following to start the application.

```bash
./bin/dev
```

 ---

## Using overcommit

[overcommit](https://github.com/sds/overcommit) a fully configurable and extendable Git hook manager is included.
When enabled the hooks will run each time a git commit is made. If any of the checks fail the commit will be ignored and
the erros will be shown.

Enable overcommit

```bash
 overcommit --sign && overcommit --sign pre-commit
````

Run overcommit

```bash
 overcommit --run
````

You should see the following
![pre-commit hooks image](docs/images/overcommit-run.png)

The above pre commit hooks have been defined in [.overcommit.yml](.overcommit.yml)


> **Troubleshooting Overcommit**
    <details>
      <summary>click for more</summary>
> 
>  If you get errors try running the following anf then the above steps.
>     
>     overcommit --uninstall

---

## Alternatives

[See a list of alternative Rails 7 templates here](docs/sensibles/alternatives.md)

---

## Contributions

Contributions welcome 🤗

> Contributions aligning with the project vision are welcome.

---
